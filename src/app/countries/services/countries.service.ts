import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = environment.API_REST;

  searchCapital(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${query}`);
  }
}
