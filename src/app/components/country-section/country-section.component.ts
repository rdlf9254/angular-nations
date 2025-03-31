import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-country-section',
  templateUrl: './country-section.component.html',
  styleUrls: ['./country-section.component.scss'],
  imports: [DividerModule, ImageModule, ButtonModule, CommonModule],
})
export class CountrySectionComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() data!: { label: string; value: any }[];

  isLink(value: any): boolean {
    return typeof value === 'string' && value.startsWith('http');
  }
}
