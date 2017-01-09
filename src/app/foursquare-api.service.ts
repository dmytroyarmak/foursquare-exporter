import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from './login.service';
import 'rxjs/add/operator/map';

@Injectable()
export class FoursquareApiService {
  FOURSQUARE_LISTS_URL = 'https://api.foursquare.com/v2/users/self/lists?group=created&oauth_token=AUTH_TOKEN&v=20170102';

  constructor(public http:Http, public loginService:LoginService) { }

  getLists() {
    let url = this.FOURSQUARE_LISTS_URL.replace('AUTH_TOKEN', this.loginService.token);
    return this.http.get(url)
      .map(response => response.json())
      .map(data => data.response.lists.items);
  }
}
