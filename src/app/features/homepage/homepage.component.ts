import { Component } from '@angular/core';
import { SearchBarComponent } from '../../component/features/homepage/search-bar/search-bar.component';
import { WeatherComponent } from '../../component/features/homepage/weather/weather.component';

@Component({
  selector: 'app-homepage',
  imports: [SearchBarComponent, WeatherComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  search?: string;

  moveSearchFromSearchToHomepage(search: string) {
    this.search = search;
    console.log(
      'Succesfully moved search from the search bar to the homepage:',
      'SearchBar: ',
      search,
      ' Homepage: ',
      this.search,
    );
  }
}
