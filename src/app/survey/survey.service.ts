import { Injectable } from '@angular/core';
import { apiUrl } from 'app/core/global.const';
import { IFeaturable } from 'app/core/contracts/ifeaturable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';
import { IHttpService,ISurveyService } from 'app/core/contracts/ihttp-service';
// import { Rx } from 'rxjs/Rx';

@Injectable()
export class SurveyService implements ISurveyService{
  
   private _url: string = apiUrl;
   private _authService: iAuth;

  constructor(private _http: Http, authService : AuthService ) {
     this._authService = authService;
  }

  userHasVote(survey_id: number): Observable<any>{
    const token = this._authService.getToken();
    return this._http.get(`${this._url}/userAnswerSurvey/${survey_id}?token=${token}`)
    .map((res: Response) => res.json());
  }

  getFeaturedList(): Observable<any>{
    return this._http.get(`${this._url}/survey/featured`)
    .map((res: Response) => res.json())
  };



  add(form: any): Observable<any>{
    const token = this._authService.getToken();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions({
      headers : headers
    })
    return this._http.post(`${this._url}/admin/survey?token=${token}`,JSON.stringify(form),options)
          .map((res: Response) => res.json());
  }

  delete(): Observable<any>{
    return new Observable<any>();
  }



  getById(id: number): Observable<any>{
    const user = (this._authService.isAdmin()) ? 'admin/' : '';
    const token = this._authService.getToken();
    return this._http.get(`${this._url}/${user}getsurvey/${id}?token=${token}`)
           .map((res: Response) => res.json());
  }

  update(): Observable<any>{
    return new Observable<any>();
  }

  list() : Observable<any>{
    // const user = (this._authService.isAdmin()) ? 'admin/' : '';
    const token = this._authService.getToken();
    if(this._authService.isAdmin()){
      return this._http.get(`${this._url}/admin/allsurvey?token=${token}`)
           .map((res: Response) => res.json());
    }else{
      return this._http.get(`${this._url}/userSurvey?token=${token}`)
           .map((res: Response) => res.json());
    }
    
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
    .map((res: Response) =>  res.json())
  }

  getSurveys(page?: number): Observable<any[]>{
    page = (page) ? page : 1; 
    return this._http.get(`${this._url}/questions?_page=${page}&_limit=1`)
                     .map((res: Response) => res.json());
  }

  getSurveysCount(): Observable<number>{
    return this._http.get(`${this._url}/questions`).map((res: Response) => res.json()).map(data => data.length);
  }


}


export const SURVEY_PROVIDERS: Array<any>=[
  { provide: SurveyService ,useClass: SurveyService },
  { provide: DevSurveyService ,useClass: DevSurveyService }
]
