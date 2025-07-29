import { Component, input } from '@angular/core';
import { WeatherDataResponse } from '../../../../../models/WeatherDataResponse';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  weatherData = input<WeatherDataResponse>();
}
