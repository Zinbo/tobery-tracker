import { BackendService } from './../services/backend.service';
import { VisitForm } from './visit-form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.scss']
})
export class AddVisitComponent implements OnInit {

  rating = 0;
  model: VisitForm = new VisitForm('Manchester', 3, 'okay');
  submitted = false;

  constructor(private backendService: BackendService) { }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.submitted = true;
    this.backendService.saveVisit(this.model);
  }

  ngOnInit() {
  }

}
