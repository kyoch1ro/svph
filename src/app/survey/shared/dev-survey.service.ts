import { Injectable } from '@angular/core';
import { ISurveyService } from './../isurvey.service';
import { ISurveyModel } from './../isurvey.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { devServerUrl } from 'app/core/global.const';

@Injectable()
export class DevSurveyService implements ISurveyService {
  private _url: string = devServerUrl;


  constructor(private _http: Http) { }

  getFeaturedSurveys(): Observable<ISurveyModel[]>{
    return this._http.get(`${this._url}/questions?isFeatured=1`)
    .map((res: Response) => <ISurveyModel[]> res.json())
  }

}
