import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  private countriesService = inject(CountriesService);
  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue:string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(termino: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(termino).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
    });
  }
}
