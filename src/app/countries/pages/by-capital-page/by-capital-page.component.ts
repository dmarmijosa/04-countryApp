import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countries: Country[] = [];
  private countriesService = inject(CountriesService);
  searchByCapital(termino: string): void {
    this.countriesService.searchCapital(termino).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
