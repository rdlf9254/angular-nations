import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-country-table',
  standalone: true,
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
  ],
})
export class CountryTableComponent implements OnInit {
  @Input() countries: any[] = [];
  filteredCountries: any[] = [];

  searchValue: string = '';

  ngOnInit(): void {
    this.filteredCountries = [...this.countries];
  }

  onFilter() {
    if (this.searchValue) {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredCountries = [...this.countries];
    }
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
    this.filteredCountries = [...this.countries];
  }
}
