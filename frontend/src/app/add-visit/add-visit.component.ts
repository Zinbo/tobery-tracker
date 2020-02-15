import { BackendService } from './../services/backend.service';
import { VisitForm } from './visit-form';
import { Component, OnInit } from '@angular/core';
import RestaurantDTO from '../../../../shared/api/dto/RestaurantDTO';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { MatSnackBar } from '@angular/material';
import VisitDTO from '../../../../shared/api/dto/VisitDTO';
import { Router } from '@angular/router';

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
  model: VisitForm = new VisitForm(null, null, null, null);
  submitted = false;
  restaurants: Array<Restaurant> = [];
  ratings = [1, 2, 3, 4, 5];
  time: Date = null;

  constructor(private backendService: BackendService, private snackBar: MatSnackBar, private router: Router) {
    backendService.getUnvisitedRestaurants().subscribe(
      (restaurantDtos: RestaurantDTO[]) => {
        restaurantDtos.map(r => {
          this.restaurants.push({ name: r.name, id: r.id });
        });
      },
      error => console.log(`got error: ${JSON.stringify(error)}`)
    );
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit(viewForm: NgForm) {
    if (viewForm.invalid) {
      this.submitted = false;
    } else {
      this.submitted = true;
      const dto: VisitDTO = new VisitDTO();
      dto.date = this.model.date;
      dto.rating = parseInt(this.model.rating, 10);
      dto.restaurantId = this.model.restaurantId;
      dto.review = this.model.review;
      this.backendService.saveVisit(dto).subscribe(
        (response: any) => {
          console.log(`Response: ${JSON.stringify(response)}`);
          this.snackBar.open('Saved visit!', '', {
            duration: 2000,
            panelClass: ['my-snackbar-background-color']
          });
          this.router.navigateByUrl('/all-visits');
        },
        error => {
          if (error.error) { this.snackBar.open(error.error, 'close', {
              panelClass: ['mat-toolbar', 'mat-warn']
            });
          } else {
            this.snackBar.open('Unexpected error occurred when saving', '', {
              panelClass: ['mat-toolbar', 'mat-warn']
            });
          }

        }
      );
    }
  }

  ngOnInit() {}
}
