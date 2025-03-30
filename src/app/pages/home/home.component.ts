import { Component, OnInit } from '@angular/core';
import { CountryService } from '@services/country.service';
import { Observable } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements OnInit {
  countries$!: Observable<any[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countries$ = this.countryService.getCountriesList();
  }
}
