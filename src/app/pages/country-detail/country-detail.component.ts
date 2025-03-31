import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@services/country.service';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';

import { CountrySectionComponent } from '@components/country-section/country-section.component';

@Component({
  selector: 'app-country-detail',
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    ImageModule,
    CountrySectionComponent,
  ],
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

  getLanguagesList(languages: any): string[] {
    return Object.values(languages);
  }
  
  getCurrenciesList(currencies: any): { label: string, value: string }[] {
    return Object.values(currencies).map((currency: any) => ({
      label: currency.name,
      value: `${currency.name} (${currency.symbol})`
    }));
  }
  
}
