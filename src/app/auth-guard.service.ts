import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService  implements CanActivate{

  constructor(public loginService:LoginService, public router:Router) { }

  canActivate() {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
