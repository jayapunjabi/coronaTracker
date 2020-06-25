import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCountComponent } from './world-count.component';

describe('WorldCountComponent', () => {
  let component: WorldCountComponent;
  let fixture: ComponentFixture<WorldCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
