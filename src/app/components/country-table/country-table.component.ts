import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-country-table',
  standalone: true,
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
  imports: [CommonModule, TableModule],
})
export class CountryTableComponent {
  @Input() countries: any[] = [];
}
