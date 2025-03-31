import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
// import { InputTextModule } from 'primeng/inputtext';

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
    // InputTextModule,
  ],
})
export class CountryTableComponent {
  @Input() countries: any[] = [];
  searchValue: string | undefined;
  dt1!: Table;

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
