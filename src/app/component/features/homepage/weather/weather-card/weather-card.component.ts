import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
} from '@angular/core';
import {
  Current,
  Forecastday,
  Location,
} from '../../../../../models/WeatherDataResponse';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  imports: [RouterLink, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  currentWeather = input<Current | undefined>(undefined);
  forecastWeather = input<Forecastday | undefined>(undefined);
  location = input<Location | undefined>(undefined);
}
