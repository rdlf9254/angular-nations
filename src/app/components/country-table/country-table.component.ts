import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-table',
  standalone: true,
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
  imports: [CommonModule]
})
export class CountryTableComponent {
  @Input() countries: any[] = [];  // Recebe a lista de países
}
