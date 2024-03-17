import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = environment.API_REST;

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((err) => of(null))
    );
  }

  searchCapital(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${query}`)
      .pipe(catchError((err) => of([])));
  }
  searchCountry(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${query}`)
      .pipe(catchError((err) => of([])));
  }
  searchRegion(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${query}`)
      .pipe(catchError((err) => of([])));
  }
}
