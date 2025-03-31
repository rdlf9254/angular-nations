import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySectionComponent } from './country-section.component';

describe('CountrySectionComponent', () => {
  let component: CountrySectionComponent;
  let fixture: ComponentFixture<CountrySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
