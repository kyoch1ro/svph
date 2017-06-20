import { Injectable,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { iAuth } from './../services/i-auth.service';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
  constructor(@Inject(AuthService) private _authService :iAuth,
              private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const notLoggedIn = !this._authService.isLoggedIn();
    if(notLoggedIn){ this.router.navigate['/surveys']; }
    return notLoggedIn;
  }
}

