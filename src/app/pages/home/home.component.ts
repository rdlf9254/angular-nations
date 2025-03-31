import { Component, OnInit } from '@angular/core';
import { CountryService } from '@services/country.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CountryTableComponent } from '@components/country-table/country-table.component';
import { Observable } from 'rxjs';

import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    CountryTableComponent,
    DividerModule,
    SkeletonModule,
  ],
})
export class HomeComponent implements OnInit {
  countries$!: Observable<any[]>;
  isLoading: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.isLoading = true;

    this.countries$ = this.countryService.getCountriesList();
    this.countries$.subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
