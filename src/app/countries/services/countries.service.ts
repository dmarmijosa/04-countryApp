import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = environment.API_REST;
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
    byCountries: { term: '', countries: [] },
  };


  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  private saveLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }
  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);

  }

  constructor() {
    this.loadFromLocalStorage();
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((err) => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(()=>this.saveLocalStorage())
    );
  }
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCountries = { term, countries })),
      tap(()=>this.saveLocalStorage())
    );
  }
  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(()=>this.saveLocalStorage())
    );
  }
}
