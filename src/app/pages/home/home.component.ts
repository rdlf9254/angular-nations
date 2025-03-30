import { Component, OnInit } from '@angular/core';
import { CountryService } from '@services/country.service';
import { Observable } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CountryTableComponent } from '@components/country-table/country-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, AsyncPipe, CountryTableComponent],
})
export class HomeComponent implements OnInit {
  countries$!: Observable<any[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countries$ = this.countryService.getCountriesList();
  }
}
