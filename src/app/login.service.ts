import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  token: string;

  constructor() {
    this.token = this.getAccessTokanFromHash();
  }

  getAccessTokanFromHash() {
    let matchResult = window.location.hash.match(/^#access_token=(.+)/);
    return matchResult ? matchResult[1] : null;
  }

  isLoggedIn() {
    return !!this.token;
  }

  redirectToLoginPage() {
    window.location.href = 'https://foursquare.com/oauth2/authenticate' +
      '?client_id=2BYCHRSAOW4YZPZIDUXVYCXNCL5AG2XTZSHATVXAGKG0WR0M' +
      '&response_type=token' +
      '&redirect_uri=' + document.getElementsByTagName('base')[0].href;
  }
}
