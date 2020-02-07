import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitForm } from '../add-visit/visit-form';
import { Observable } from 'rxjs';
import RestaurantDTO from '../../../../shared/api/dto/RestaurantDTO';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  async saveVisit(form: VisitForm) {
   this.http.post('http://localhost:3000/visits', form)
   .subscribe((data: any) => console.log(`got data: ${data}`));
  }

  getRestaurants(): Observable<RestaurantDTO[]> {
      return this.http.get<RestaurantDTO[]>('http://localhost:3000/restaurants');
  }
}
