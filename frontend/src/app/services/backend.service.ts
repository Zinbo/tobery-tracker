import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import RestaurantDTO from '../../../../shared/api/dto/RestaurantDTO';
import VisitDTO from '../../../../shared/api/dto/VisitDTO';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  saveVisit(form: VisitDTO): Observable<any> {
    return this.http.post('http://localhost:3000/visits', form, { observe: 'response' });
  }

  getRestaurants(): Observable<RestaurantDTO[]> {
      return this.http.get<RestaurantDTO[]>('http://localhost:3000/restaurants');
  }

  getUnvisitedRestaurants(): Observable<RestaurantDTO[]> {
    return this.http.get<RestaurantDTO[]>('http://localhost:3000/restaurants?showVisited=false');
}
}
