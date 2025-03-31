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

  countryIdentity: any[] = [];
  geography: any[] = [];
  populationAndSociety: any[] = [];
  economyAndCurrency: any[] = [];
  politicsAndStatus: any[] = [];
  infrastructure: any[] = [];
  mapsAndLocation: any[] = [];
  otherDetails: any[] = [];

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

        this.fillSections();
      });
  }

  fillSections() {
    this.countryIdentity = [
      { label: 'Nome comum', value: this.countryDetails.name.common },
      { label: 'Nome oficial', value: this.countryDetails.name.official },
      {
        label: 'Código(s) do país',
        value:
          this.countryDetails.cca2 +
          ' / ' +
          this.countryDetails.ccn3 +
          ' / ' +
          this.countryDetails.cca3 +
          ' / ' +
          this.countryDetails.cioc,
      },
      {
        label: 'Domínio da Internet',
        value: this.countryDetails.tld.join(', '),
      },
      { label: 'Código FIFA', value: this.countryDetails.fifa },
    ];

    this.geography = [
      { label: 'Região', value: this.countryDetails.region },
      { label: 'Sub-região', value: this.countryDetails.subregion },
      {
        label: 'Coordenadas',
        value:
          this.countryDetails.latlng[0] + ', ' + this.countryDetails.latlng[1],
      },
      { label: 'Área', value: this.countryDetails.area + ' km²' },
      {
        label: 'Território sem saída para o mar',
        value: this.countryDetails.landlocked ? 'Sim' : 'Não',
      },
    ];

    this.populationAndSociety = [
      { label: 'População', value: this.countryDetails.population },
      { label: 'Capital', value: this.countryDetails.capital[0] },
      {
        label: 'Línguas',
        value: this.getLanguagesList(this.countryDetails.languages).join(', '),
      },
      {
        label: 'Gentílico',
        value:
          this.countryDetails.demonyms.eng.m +
          ' / ' +
          this.countryDetails.demonyms.eng.f,
      },
    ];

    this.economyAndCurrency = this.getCurrenciesList(
      this.countryDetails.currencies
    );

    this.politicsAndStatus = [
      {
        label: 'Independente',
        value: this.countryDetails.independent ? 'Sim' : 'Não',
      },
      { label: 'Status', value: this.countryDetails.status },
      {
        label: 'Membro da ONU',
        value: this.countryDetails.unMember ? 'Sim' : 'Não',
      },
    ];

    this.infrastructure = [
      { label: 'Lado da direção', value: this.countryDetails.car.side },
      {
        label: 'Prefixo de placas',
        value: this.countryDetails.car.signs.join(', '),
      },
    ];

    this.mapsAndLocation = [
      { label: 'Google Maps', value: this.countryDetails.maps.googleMaps },
      {
        label: 'OpenStreetMap',
        value: this.countryDetails.maps.openStreetMaps,
      },
    ];

    this.otherDetails = [
      { label: 'Início da semana', value: this.countryDetails.startOfWeek },
      { label: 'Fuso horário', value: this.countryDetails.timezones[0] },
    ];
  }

  getLanguagesList(languages: any): string[] {
    return Object.values(languages);
  }

  getCurrenciesList(currencies: any): { label: string; value: string }[] {
    return Object.values(currencies).map((currency: any) => ({
      label: currency.name,
      value: `${currency.name} (${currency.symbol})`,
    }));
  }
}
