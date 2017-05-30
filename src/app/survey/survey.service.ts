import { Injectable } from '@angular/core';
import { devServerUrl } from 'app/core/global.const';
import { ISurveyService } from './isurvey.service';
import { ISurveyModel } from './isurvey.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class SurveyService implements ISurveyService {
  constructor() { }

    getFeaturedSurveys(): Observable<ISurveyModel[]>{
      return new Observable<ISurveyModel[]>();
    };
    getSurveys(page? : number) : Observable<ISurveyModel[]>{
      return new Observable<ISurveyModel[]>();
    };
    getSurveysCount(): Observable<number>{
      return new Observable<number>();
    };
}


@Injectable()
export class DevSurveyService implements ISurveyService {
  private _url: string = devServerUrl;


  constructor(private _http: Http) { }

  getFeaturedSurveys(): Observable<ISurveyModel[]>{
    return this._http.get(`${this._url}/questions?isFeatured=1`)
    .map((res: Response) => <ISurveyModel[]> res.json())
  }

  getSurveys(page?: number): Observable<ISurveyModel[]>{
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
