import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';
import { IUserService } from 'app/user/iuser.service';
import { DevUserService, UserService } from 'app/user/user.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { apiUrl } from 'app/core/global.const';



@Injectable()
export class AuthService implements iAuth{
  private _url : string =  apiUrl;

    constructor(private _http: Http) {
    }

    login(user: string, password: string){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('access-control-request-method', 'POST');
      var options = new RequestOptions({
        headers : headers
      });

      this._http.post(`${this._url}/user/signin`,{
        'email': user,
        'password': password
      }, options)
      .subscribe(data => console.log(data));


      // this._userService.login(user,password).subscribe(
      //   data => {
      //     // console.log(data);
      //     if(data.length > 0){
      //       localStorage.setItem('token','hl25spS%2f31%267$7058aB55b31b');
      //     }
      //   }
      // )
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
}


@Injectable()
export class DevAuthService implements iAuth{
  // public isLoggedIn =  new Subject<boolean>();
  private _userService : IUserService;

  constructor(userService: UserService) {
    this._userService = userService; 
  }

  login(user: string, password: string){
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
}


export const AUTH_PROVIDERS: Array<any>=[
  { provide: AuthService ,useClass: AuthService },
  { provide: DevAuthService ,useClass: DevAuthService }
]
