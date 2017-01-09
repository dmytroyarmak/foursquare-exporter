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
}
