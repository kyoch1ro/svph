import { Injectable } from '@angular/core';
import { iSurvey } from './i-survey.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Survey } from './survey.model';
import { devServerUrl } from 'app/core/global.const';

@Injectable()
export class DevSurveyService implements iSurvey {
  private _url: string = devServerUrl;


  constructor(private _http: Http) { }

  getFeaturedSurveys(){

    // return this._http.get(`${this._url}/questions?isFeatured=1`)
    // .map((res : Response) => res.json())
    // .map(res => new Survey(res));

    return this._http.get(`${this._url}/questions?isFeatured=1`)
    .flatMap((res : Response) => res.json())
    .map(res => new Survey(res));
  }

}
