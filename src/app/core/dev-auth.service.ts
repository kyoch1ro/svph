import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DevAuthService implements iAuth{
  public isLoggedIn =  new Subject<boolean>();

  constructor() {
    this.setIsLoggedIn(false);
    this.isLoggedIn.subscribe(
      data => {
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
    if(user === 'admin@surveyph.com' && password === 'admin'){
      this.setIsLoggedIn(true);
      localStorage.setItem('username',user);
      return;
    }
    this.setIsLoggedIn(false);
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
