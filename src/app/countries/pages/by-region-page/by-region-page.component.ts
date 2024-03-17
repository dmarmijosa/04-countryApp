import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries: Country[] = [];
  private countriesService = inject(CountriesService);
  searchByRegion(termino: string): void {
    this.countriesService.searchRegion(termino).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
