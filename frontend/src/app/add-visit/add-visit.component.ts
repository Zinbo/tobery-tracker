import { BackendService } from './../services/backend.service';
import { VisitForm } from './visit-form';
import { Component, OnInit } from '@angular/core';
import RestaurantDTO from '../../../../shared/api/dto/RestaurantDTO';

interface Restaurant {
  id: string;
  name: string;
}

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.scss']
})
export class AddVisitComponent implements OnInit {

  rating = 0;
  model: VisitForm = new VisitForm(null, null, null);
  submitted = false;
  restaurants: Array<Restaurant> = [];
  ratings = [1, 2, 3, 4, 5];

  constructor(private backendService: BackendService) {
    backendService.getRestaurants().subscribe((restaurantDtos: RestaurantDTO[]) => {
      restaurantDtos.map(r => {
        this.restaurants.push({name: r.name, id: r.id});
      })
    })
   }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.submitted = true;
    this.backendService.saveVisit(this.model);
  }

  ngOnInit() {
  }

}
