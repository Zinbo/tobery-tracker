import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVisitComponent } from './add-visit.component';
import { BackendService } from './../services/backend.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import RestaurantDTO from '../services/RestaurantDTO';
import VisitDTO from '../services/VisitDTO';

describe('AddVisitComponent', () => {
  let component: AddVisitComponent;
  let fixture: ComponentFixture<AddVisitComponent>;

  const mockBackendService: Partial<BackendService> = {
    getUnvisitedRestaurants(): Observable<RestaurantDTO[]> {
      const dto = new RestaurantDTO();
      dto.id = '123';
      dto.name = 'Leeds';
      return of([dto]);
    }
  };
  const saveVisitSpy = spyOn(mockBackendService, 'saveVisit');
  const mockMatSnackBar: Partial<MatSnackBar> = {};
  const openSpy = spyOn(mockMatSnackBar, 'open');
  const mockRouter: Partial<Router> = {};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitComponent ],
      providers: [ {provide: BackendService, useValue: mockBackendService},
        { provide: MatSnackBar, useValue: mockMatSnackBar }, { provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should add visit given user enters valid details', () => {
    // TODO: render component
    const expected = new VisitDTO();
    expected.restaurantId = '123';
    expected.rating = 1;
    expected.review = 'my review';

    fixture.nativeElement.query(By.css('input[name=date]')).value = '5/18/20205';
    fixture.nativeElement.query(By.css('input[name=restuarant]')).click();
    fixture.detectChanges();
    fixture.nativeElement.query(By.css('.mat-option')).click();

    fixture.nativeElement.query(By.css('input[name=review]')).value = 'my review';
    fixture.nativeElement.query(By.css('input[name=rating]')).click();
    fixture.detectChanges();
    fixture.nativeElement.query(By.css('.mat-option'))[0].click();
    fixture.detectChanges();

    // TODO: click button
    fixture.nativeElement.query(By.css('.mat-button-base'));

    // TODO: make sure back end service is called and snack bar rendered

    expect(saveVisitSpy).toHaveBeenCalledWith(expected);
    expect(openSpy).toHaveBeenCalledWith('Saved visit!');
  });
});
