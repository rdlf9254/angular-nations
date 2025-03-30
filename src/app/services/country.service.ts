import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) {}
  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          population: country.population,
          region: country.region,
          flag: country.flags.svg,
        }))
      ),
      catchError((error) => {
        console.error('Erro ao buscar países', error);
        return [];
      })
    );
  }
}