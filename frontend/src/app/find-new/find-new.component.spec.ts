import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNewComponent } from './find-new.component';

describe('FindNewComponent', () => {
  let component: FindNewComponent;
  let fixture: ComponentFixture<FindNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
