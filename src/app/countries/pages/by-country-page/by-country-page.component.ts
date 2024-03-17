import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = [];
  private countriesService = inject(CountriesService);
  searchByPais(termino: string): void {
    this.countriesService.searchCountry(termino).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
