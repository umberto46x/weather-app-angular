import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from '../../../node_modules/axios';
import { CurrentWeatherResponse } from '../models/CurrentWeatherResponse';
import { AppState } from '../store/reducers';
import { ForecastedWeatherResponse } from '../models/ForecastedWeatherResponse';
import {
  setCurrentWeatherData,
  setErrorWeatherData,
  setForecastedWeatherData,
  setLoadingWeatherData,
} from '../store/actions/weatherData.actions';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  store: Store<AppState> = inject(Store);
  baseUrl: string = 'http://api.weatherapi.com/v1';
  key = '2692d29e4f324ab58b472021252807';

  loadForecastWeatherData(query: string) {
    const url: string =
      this.baseUrl +
      `/forecast.json?key=${this.key}&q=${query}&days=10&aqi=no&alerts=no`;
    let response: ForecastedWeatherResponse;

    this.store.dispatch(setLoadingWeatherData());

    try {
      (async () => {
        response = (await axios.get<ForecastedWeatherResponse>(url)).data;
        this.store.dispatch(setForecastedWeatherData(response));
      })();
    } catch (err) {
      this.store.dispatch(setErrorWeatherData({ error: Error.toString() }));
    }
  }

  loadCurrentWeatherData(query: string) {
    const url: string =
      this.baseUrl + `/current.json?key=${this.key}&q=${query}&aqi=yes`;

    let response: CurrentWeatherResponse;

    this.store.dispatch(setLoadingWeatherData());

    try {
      (async () => {
        response = (await axios.get<CurrentWeatherResponse>(url)).data;
        this.store.dispatch(setCurrentWeatherData(response));
      })();
    } catch (err) {
      this.store.dispatch(setErrorWeatherData({ error: Error.toString() }));
    }
  }
}
