import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitForm } from '../add-visit/visit-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  async saveVisit(form: VisitForm) {
   this.http.post('http://localhost:3000/visits', form)
   .subscribe((data: any) => console.log(`got data: ${data}`));
  }

}
