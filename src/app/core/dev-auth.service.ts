import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';




@Injectable()
export class DevAuthService implements iAuth{

  constructor() { }

  login(user: string, password: string): boolean{
    if(user === 'admin' && password === 'admin'){
      localStorage.setItem('username',user);
      return true;
    }
    return false;
  }

  logout(): void{

  }
  getUser(): string{
    return localStorage.getItem('username');
  }


  isLoggedIn(): boolean{
    return this.getUser() != null;
  };

}
