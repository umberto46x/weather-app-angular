import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  search = output<string>();

  handleLocalizationUpdate() {
    console.log('gps updated');
  }

  handleSearch(input: string) {
    this.search.emit(input);
  }
}
