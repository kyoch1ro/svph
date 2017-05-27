import { Injectable } from '@angular/core';
import { devServerUrl } from 'app/core/global.const';
import { IUserService }  from './../iuser.service';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from './../iuser.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

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
}
