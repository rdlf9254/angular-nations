import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getCountriesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          population: country.population,
          region: country.region,
          flag: country.flags.svg,
          cca3: country.cca3,
        }))
      ),
      catchError((error) => {
        console.error('Erro ao buscar países', error);
        return [];
      })
    );
  }

  getCountryDetails(countryCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alpha?codes=${countryCode}`);
  }
}
