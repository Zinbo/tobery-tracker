import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitsComponent } from './all-visits.component';

describe('AllVisitsComponent', () => {
  let component: AllVisitsComponent;
  let fixture: ComponentFixture<AllVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
