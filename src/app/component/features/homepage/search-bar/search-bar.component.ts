import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { WeatherService } from '../../../../services/weather.service';
import {
  debounceTime,
  from,
  fromEvent,
  map,
  Subscription,
  switchMap,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnDestroy {
  search = signal<string>('');
  searchByChangeSubscription?: Subscription;
  weatherService = inject(WeatherService);

  handleLocalizationUpdate() {
    console.log('gps updated');
  }

  handleSearchByButton(v: string) {
    if (v) {
      this.search.set(v);
      this.weatherService.loadWeatherData(this.search());
      console.log(this.search());
    }
  }

  handleSearchByChange(element: HTMLInputElement) {
    this.searchByChangeSubscription = fromEvent(element, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        debounceTime(1000),
      )
      .subscribe((e) => {
        this.search.set(e);
        this.weatherService.loadWeatherData(this.search());
        console.log(this.search());
      });
  }

  ngOnDestroy(): void {
    if (this.searchByChangeSubscription) {
      this.searchByChangeSubscription.unsubscribe();
      this.weatherService.ngOnDestroy();
    }
  }
}
