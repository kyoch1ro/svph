import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';
import { IUserService } from 'app/user/iuser.service';
import { DevUserService, UserService } from 'app/user/user.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { apiUrl } from 'app/core/global.const';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService implements iAuth{
  private _url : string =  apiUrl;

    constructor(private _http: Http) {
    }

    login(user: string, password: string, isAdmin: boolean = false): Observable<any>{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var options = new RequestOptions({
        headers : headers
      });
      const userType = (isAdmin) ? 'admin' : 'user';
      return this._http.post(`${this._url}/${userType}/signin`,{
        'email': user,
        'password': password
      }, options).map(data => data.json());
    };

    logout(): void{
        return;
    };
    getUser(): string{
        return 'false';
    };
    isLoggedIn(): boolean{
        return this.getToken() !== null;
    };
    getToken(): string{
      return localStorage.getItem('token');
    }


    isAdmin(): boolean{
      return this._isAccountAdmin();
    }
    private _isAccountAdmin(): boolean{
      return (localStorage.getItem('accType') == 'admin') ? true : false;
    }


    
}


@Injectable()
export class DevAuthService implements iAuth{
  // public isLoggedIn =  new Subject<boolean>();
  private _userService : IUserService;

  constructor(userService: UserService) {
    this._userService = userService; 
  }

  login(user: string, password: string){
    return new Observable<any>();
    // this._userService.login(user,password).subscribe(
    //   data => {
    //     console.log(data);
    //     if(data.length > 0){
    //       localStorage.setItem('token','hl25spS%2f31%267$7058aB55b31b');
    //     }
    //   }
    // )
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

  isAdmin(): boolean{
      return false;
  }
}


export const AUTH_PROVIDERS: Array<any>=[
  { provide: AuthService ,useClass: AuthService },
  { provide: DevAuthService ,useClass: DevAuthService }
]
