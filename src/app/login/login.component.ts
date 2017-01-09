import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectToLoginPage() {
    window.location.href = 'https://foursquare.com/oauth2/authenticate' +
      '?client_id=2BYCHRSAOW4YZPZIDUXVYCXNCL5AG2XTZSHATVXAGKG0WR0M' +
      '&response_type=token' +
      '&redirect_uri=http://localhost:4200/';
  }

}
