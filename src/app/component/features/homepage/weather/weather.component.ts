import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../../../../services/weather.service';
import { Store } from '@ngrx/store';
import { WeatherDataState } from '../../../../store/weather/weatherData.reducer';
import { Observable } from 'rxjs';
import { selectWeatherState } from '../../../../store/weather/weatherData.selectors';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AppState } from '../../../../store';

@Component({
  selector: 'app-weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WeatherCardComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnChanges {
  store: Store<AppState> = inject(Store);
  weatherData$?: Observable<WeatherDataState> =
    this.store.select(selectWeatherState);

  ngOnChanges(changes: SimpleChanges): void {
    this.weatherData$?.subscribe((e) => console.log(e.data?.location.name));
  }
}
