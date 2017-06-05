import { Injectable } from '@angular/core';
import { apiUrl } from 'app/core/global.const';
import { ISurveyService } from 'app/core/contracts/ISurvey.service';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service'
import { iAuth } from 'app/core/services/i-auth.service'
import { IHttpService } from 'app/core/contracts/ihttp-service';
// import { Rx } from 'rxjs/Rx';

@Injectable()
export class SurveyService implements ISurveyService, IHttpService {
  
   private _url: string = apiUrl;
   private _authService: iAuth;

  constructor(private _http: Http, authService : AuthService ) {
     this._authService = authService;
  }

  
  getFeaturedSurveys(): Observable<any>{
    return this._http.get(`${this._url}/question/featured`)
    .map((res: Response) => res.json())
  };



  add(): Observable<any>{
    return new Observable<any>();
  }

  delete(): Observable<any>{
    return new Observable<any>();
  }
  getById(): Observable<any>{
    return new Observable<any>();
  }

  update(): Observable<any>{
    return new Observable<any>();
  }

  list() : Observable<any>{
    const user = (this._authService.isAdmin()) ? 'admin/' : '';
    const token = this._authService.getToken();
    return this._http.get(`${this._url}/${user}question?token=${token}`)
           .map((res: Response) => res.json());
  };

  count(): Observable<number>{
    return new Observable<number>();
  };




}


@Injectable()
export class DevSurveyService{
  private _url: string = apiUrl;


  constructor(private _http: Http) { }

  getFeaturedSurveys(): Observable<any[]>{
    return this._http.get(`${this._url}/questions?isFeatured=1`)
    .map((res: Response) => <ISurveyModel[]> res.json())
  }

  getSurveys(page?: number): Observable<any[]>{
    page = (page) ? page : 1; 
    return this._http.get(`${this._url}/questions?_page=${page}&_limit=1`)
                     .map((res: Response) => <ISurveyModel[]> res.json());
  }

  getSurveysCount(): Observable<number>{
    return this._http.get(`${this._url}/questions`).map((res: Response) => res.json()).map(data => data.length);
  }


}


export const SURVEY_PROVIDERS: Array<any>=[
  { provide: SurveyService ,useClass: SurveyService },
  { provide: DevSurveyService ,useClass: DevSurveyService }
]
