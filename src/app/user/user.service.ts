import { Injectable } from '@angular/core';
import { devServerUrl } from 'app/core/global.const';
import { IUserService }  from './iuser.service';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from './iuser.model';
import 'rxjs/add/observable/of';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class UserService implements IUserService {

  constructor() { }

  registerUser(newUser: any): Observable<any>{
    return new Observable<any>();
  }

  login(username: string, password: string): Observable<any>{
    if(username == 'admin@survey.ph' && password == 'password'){
      return Observable.of({
        "email": "ron@umayan",
        "password": "102609143",
        "name": "Ron Michael Umayan",
        "confirmPassword": "102609143",
        "id": 12
      }).map(data => data);
    }else{
      return Observable.of({}).map(data => data);
    }
    
    // return new Observable<any>();
  }

}



@Injectable()
export class DevUserService implements IUserService{
  private _url: string = devServerUrl;
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


  login(username: string, password: string): Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })

    return this._http.get(`${this._url}/users?email=${username}&password=${password}`)
    .map(data => data.json());
  }
}


export const USER_PROVIDERS: Array<any>=[
  { provide: UserService ,useClass: UserService },
  { provide: DevUserService ,useClass: DevUserService }
]
