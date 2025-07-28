import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../../../../services/weather.service';

@Component({
  selector: 'app-weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  search = input<string>();
  weatherService: WeatherService = inject(WeatherService);

  constructor() {
    console.log(this.search);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'].currentValue != changes['search'].previousValue) {
      if (this.search() !== undefined) {
        console.log('search: ', this.search());
        this.weatherService.loadCurrentWeatherData(this.search()!);
        this.weatherService.loadForecastWeatherData(this.search()!);
      }
    }
  }
}
