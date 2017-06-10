import { Injectable } from '@angular/core';
import { apiUrl } from 'app/core/global.const';
import { IUserService }  from './iuser.service';
import { Observable } from 'rxjs/Observable';

import { IUserHttpService } from 'app/core/contracts/ihttp-service';
import { IUploadable } from 'app/core/contracts/iuploadable';
import { IUserModel } from './iuser.model';
import 'rxjs/add/observable/of';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class UserService implements IUploadable,IUserHttpService  {
  private _url: string = apiUrl;
  constructor(private _http: Http) { }

  saveOtherDetails(form: any): Observable<any>{
    form['user_id'] = localStorage.getItem('temp_id');
    console.log(form);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/user/adduserotherinfo`,JSON.stringify(form),options);
  }



  upload(file: any): Observable<any>{
    let headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(`${this._url}/user/uploadGovtID`, formData, options)
            .map(res => res.json())
  }
  getById(id: number): Observable<any>{
    return;
  };
  list(id?: number): Observable<any>{
    return;
  };

  add(newUser: any): Observable<any>{
    //append the recently uploaded govertment_id
    newUser['govt_id'] = localStorage.getItem('imageName');

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/user`,JSON.stringify(newUser),options);
  };
  
  delete(id: number): Observable<any>{
    return;
  };
  update(id: number): Observable<any>{
    return;
  };
  count(): Observable<any>{
    return;
  };






  // registerUser(newUser: any): Observable<any>{
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   var options = new RequestOptions({
  //     headers : headers
  //   })
  //   return this._http.post(`${this._url}/user`,JSON.stringify(newUser),options);
  // }
}



// @Injectable()
// export class DevUserService implements IUserService{
//   private _url: string = apiUrl;
//   constructor(private _http: Http) { }


//   registerUser(newUser: any): Observable<any>{
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     //for CORS ONLY
//     // headers.append('access-control-request-method', 'POST'); 
//     var options = new RequestOptions({
//       headers : headers
//     })
//     return this._http.post(`${this._url}/users`,JSON.stringify(newUser),options);
//   }


// }


export const USER_PROVIDERS: Array<any>=[
  { provide: UserService ,useClass: UserService }
]
