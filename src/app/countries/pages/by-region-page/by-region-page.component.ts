import { Component, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit{
  private countriesService = inject(CountriesService);
  countries: Country[] = [];
  isLoading: boolean = false;

  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion!:Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region!;
  }
  searchByRegion(termino: Region): void {
    this.selectedRegion= termino;
    this.isLoading = true;
    this.countriesService.searchRegion(termino).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
    });
  }
}
