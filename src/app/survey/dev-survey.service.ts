import { Injectable } from '@angular/core';
import { iSurvey } from './i-survey.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Survey } from './survey.model';

@Injectable()
export class DevSurveyService implements iSurvey {
  private _url: string = 'http://localhost:3000/questions';
  constructor(private _http: Http) { }

  getFeaturedSurveys(): Observable<Survey>{
    return this._http.get(`${this._url}?isFeatured=1`)
    .flatMap((res : Response) => res.json())
    .map(res => new Survey(res));
  }


  // getFeaturedSurveys(): Observable<Survey>{
  //   return this._http.get(`${this._url}?isFeatured=1`)
  //   .map((res : Response) => res.json())
  //   .map(res => new Survey(res));
  // }
}
