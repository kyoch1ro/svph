import { Injectable, Inject } from '@angular/core';
import { IOptionDTO } from './ioption';
import { IHttpService, IOptionHttpService } from 'app/core/contracts/ihttp-service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';
import { apiUrl } from 'app/core/global.const';



@Injectable()
export class OptionsService implements IOptionHttpService {
  private _url: string = apiUrl;


  constructor(
              @Inject(AuthService) private _authService : iAuth,
              private _http: Http) { }


  getById(id: number): any{
    return;
  };
  
  list(id: number): any{
    const token = this._authService.getToken();
      return this._http.get(`${this._url}/question/BySurvey/${id}?token=${token}`)
           .map((res: Response) => res.json());
  };

  saveOptions(form: any){
    const token = this._authService.getToken();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/submitAnswer?token=${token}`,JSON.stringify(form),options);
  }

  add(data: any): Observable<any>{
    return;
  };
  delete(id: number): Observable<any>{
    return;
  };
  update(id: number): Observable<any>{
    return;
  };

  count(): Observable<number>{
    return;
  }

}
export const OPTION_PROVIDERS: Array<any>=[
  { provide: OptionsService ,useClass: OptionsService }
]
