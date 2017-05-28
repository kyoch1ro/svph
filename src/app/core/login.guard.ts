import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DevAuthService } from './dev-auth.service';
import { iAuth } from './i-auth.service';


@Injectable()
export class LoginGuard implements CanActivate {
  private _authService : iAuth;
  
  constructor(authService : DevAuthService){
    this._authService = authService;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this._authService.isLoggedIn();
    return isLoggedIn;
  }
}
