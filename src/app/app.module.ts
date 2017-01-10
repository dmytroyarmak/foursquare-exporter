import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { FoursquareApiService } from './foursquare-api.service';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { AuthGuardService } from './auth-guard.service';
import { VenuesComponent } from './venues/venues.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListsComponent,
    ListComponent,
    VenuesComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/lists',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'lists',
        canActivate: [AuthGuardService],
        component: ListsComponent
      },
      {
        path: 'lists/:id',
        canActivate: [AuthGuardService],
        component: VenuesComponent
      }
    ])
  ],
  providers: [
    LoginService,
    FoursquareApiService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
