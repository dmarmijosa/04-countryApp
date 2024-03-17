import { Component, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  private countriesService = inject(CountriesService);
  isLoading: boolean = false;
  initialValue:string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  
  searchByPais(termino: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(termino).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
    });
  }
}
