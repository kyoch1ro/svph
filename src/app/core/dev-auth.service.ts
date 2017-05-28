import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IUserService } from 'app/user/iuser.service';
import { DevUserService } from 'app/user/shared/dev-user.service';

@Injectable()
export class DevAuthService implements iAuth{
  // public isLoggedIn =  new Subject<boolean>();
  private _userService : IUserService;

  constructor(userService: DevUserService) {
    this._userService = userService; 
  }

  login(user: string, password: string){
    this._userService.login(user,password).subscribe(
      data => {
        if(data.length > 0){
          localStorage.setItem('token','hl25spS%2f31%267$7058aB55b31b');
        }
      }
    )
  }

  logout(): void{
    
    // this.setIsLoggedIn(false);
  }

  isLoggedIn(): boolean{
    return this.getToken() !== null;
  }


  getUser(): string{
    return localStorage.getItem('username');
  }

  getToken(): string{
    return localStorage.getItem('token');
  }
}


export const DEV_AUTH_PROVIDERS: Array<any>=[
  { provide: DevAuthService,useClass: DevAuthService }
]
