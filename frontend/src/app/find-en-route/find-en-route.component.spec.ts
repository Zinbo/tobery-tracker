import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEnRouteComponent } from './find-en-route.component';

describe('FindEnRouteComponent', () => {
  let component: FindEnRouteComponent;
  let fixture: ComponentFixture<FindEnRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEnRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEnRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
