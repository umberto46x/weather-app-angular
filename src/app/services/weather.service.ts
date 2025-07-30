import { inject, Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  setErrorWeatherData,
  setLoadingWeatherData,
  setWeatherData,
} from '../store/weather/weatherData.actions';
import { from, map, Observable, Subscription } from 'rxjs';
import { AppState } from '../store';
import { WeatherDataResponse } from '../models/WeatherDataResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnDestroy {
  store: Store<AppState> = inject(Store);
  http: HttpClient = inject(HttpClient);
  baseUrl: string = 'https://api.weatherapi.com/v1';
  key = '2692d29e4f324ab58b472021252807';
  WeatherSubscription?: Subscription;

  loadWeatherData(query: string) {
    if (query && query.length > 1) {
      const url: string =
        this.baseUrl +
        `/forecast.json?key=${this.key}&q=${query}&days=10&aqi=no&alerts=no`;

      const response: Observable<WeatherDataResponse> =
        this.http.get<WeatherDataResponse>(url);

      this.store.dispatch(setLoadingWeatherData());

      try {
        this.WeatherSubscription = response.subscribe((v) =>
          this.store.dispatch(
            setWeatherData({
              ...v,
            }),
          ),
        );
      } catch (err: any) {
        this.store.dispatch(setErrorWeatherData({ error: err.toString() }));
      }
    }
  }

  ngOnDestroy(): void {
    if (this.WeatherSubscription) {
      this.WeatherSubscription?.unsubscribe();
    }
  }
}
