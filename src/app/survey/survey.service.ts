import { Injectable } from '@angular/core';
import { apiUrl } from 'app/core/global.const';
import { ISurveyService } from './isurvey.service';
import { ISurveyModel } from './isurvey.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { Rx } from 'rxjs/Rx';

@Injectable()
export class SurveyService implements ISurveyService {
  constructor(private _http: Http) { }
   private _url: string = apiUrl;

    getFeaturedSurveys(): Observable<any[]>{
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        // var options = new RequestOptions({
        //   headers : headers
        // });
      return this._http.get(`${this._url}/question/featured`)
      .map((res: Response) => res.json())
    };

    getSurveys(page? : number) : Observable<any[]>{
       page = (page) ? page : 1; 
      return this._http.get(`${this._url}/questions?_page=${page}&_limit=10`)
                     .map((res: Response) => res.json());
    };
    getSurveysCount(): Observable<number>{
      return new Observable<number>();
    };
}


@Injectable()
export class DevSurveyService implements ISurveyService {
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
