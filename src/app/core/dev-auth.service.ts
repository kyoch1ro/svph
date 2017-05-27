import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IUserService } from 'app/user/iuser.service';
import { DevUserService } from 'app/user/shared/dev-user.service';

@Injectable()
export class DevAuthService implements iAuth{
  public isLoggedIn =  new Subject<boolean>();
  private _userService : IUserService;

  constructor(userService: DevUserService) {
    this._userService = userService;
    this.setIsLoggedIn(false);    
    this.isLoggedIn.subscribe(
      data => {
        console.log(data);
        if(!data){
          localStorage.removeItem('username');
        }
      }
    )
  }


  setIsLoggedIn(val){
      this.isLoggedIn.next(val);
  }

  login(user: string, password: string){
    this._userService.login(user,password).subscribe(
      data => {
        if(data.length > 0){
          this.setIsLoggedIn(true);      
        }else{
          this.setIsLoggedIn(false);
        }
      }
    )
    // if(user === 'admin@surveyph.com' && password === 'admin'){
    //   this.setIsLoggedIn(true);
    //   localStorage.setItem('username',user);
    //   return;
    // }
    
  }

  logout(): void{
    this.setIsLoggedIn(false);
  }


  getUser(): string{
    return localStorage.getItem('username');
  }
}



export const DEV_AUTH_PROVIDERS: Array<any>=[
  { provide: DevAuthService,useClass: DevAuthService }
]
