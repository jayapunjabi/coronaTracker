import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaCountComponent } from './india-count.component';

describe('IndiaCountComponent', () => {
  let component: IndiaCountComponent;
  let fixture: ComponentFixture<IndiaCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
