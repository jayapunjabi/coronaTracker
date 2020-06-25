import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCountComponent } from './country-count.component';

describe('CountryCountComponent', () => {
  let component: CountryCountComponent;
  let fixture: ComponentFixture<CountryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
