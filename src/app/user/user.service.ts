import { Injectable } from '@angular/core';
import { apiUrl } from 'app/core/global.const';
import { IUserService }  from './iuser.service';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from './iuser.model';
import 'rxjs/add/observable/of';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class UserService implements IUserService {
  private _url: string = apiUrl;
  constructor(private _http: Http) { }

  registerUser(newUser: any): Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/user`,JSON.stringify(newUser),options);
  }
}



@Injectable()
export class DevUserService implements IUserService{
  private _url: string = apiUrl;
  constructor(private _http: Http) { }


  registerUser(newUser: any): Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //for CORS ONLY
    // headers.append('access-control-request-method', 'POST'); 
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/users`,JSON.stringify(newUser),options);
  }


}


export const USER_PROVIDERS: Array<any>=[
  { provide: UserService ,useClass: UserService },
  { provide: DevUserService ,useClass: DevUserService }
]
