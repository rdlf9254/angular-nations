import { Component, OnInit } from '@angular/core';
import { CountryService } from '@services/country.service';
import { Observable } from 'rxjs';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,

})
export class HomeComponent implements OnInit {
  countries$!: Observable<any[]>;
  constructor(private countryService: CountryService) {}
  ngOnInit() {
    this.countries$ = this.countryService.getCountries();
  }
}
