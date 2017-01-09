import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { FoursquareApiService } from './foursquare-api.service';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoginService,
    FoursquareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
