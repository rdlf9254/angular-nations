import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

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
  ],
})
export class CountryTableComponent {
  @Input() countries: any[] = [];
}
