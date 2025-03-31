import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@services/country.service';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-country-detail',
  imports: [CommonModule, ButtonModule, CardModule, DividerModule,ImageModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  countryDetails: any;
  countryCode: string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.countryCode = '';
  }

  ngOnInit() {
    this.countryCode = this.route.snapshot.paramMap.get('code')!;

    this.countryService
      .getCountryDetails(this.countryCode)
      .subscribe((data) => {
        this.countryDetails = data[0];
        console.log(data);
      });
  }

  getCurrenciesList(currencies: any): { name: string; symbol: string }[] {
    return Object.values(currencies);
  }

  getLanguagesList(languages: any): string[] {
    return Object.values(languages);
  }
}
