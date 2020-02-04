import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon'

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { AllVisitsComponent } from './all-visits/all-visits.component';
import { FindNewComponent } from './find-new/find-new.component';
import { FindEnRouteComponent } from './find-en-route/find-en-route.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVisitComponent,
    AllVisitsComponent,
    FindNewComponent,
    FindEnRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
