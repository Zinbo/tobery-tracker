import { AllVisitsComponent } from './all-visits/all-visits.component';
import { FindNewComponent } from './find-new/find-new.component';
import { FindEnRouteComponent } from './find-en-route/find-en-route.component';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-visit', component: AddVisitComponent},
  {path: 'find-en-route', component: FindEnRouteComponent},
  {path: 'find-new', component: FindNewComponent},
  {path: 'all-visits', component: AllVisitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
