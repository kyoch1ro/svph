import { Injectable } from '@angular/core';
import { devServerUrl,webServerUrl } from 'app/core/global.const';
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
   private _url: string = webServerUrl;

    getFeaturedSurveys(): Observable<ISurveyModel[]>{
      return Observable.of(
        [
           {
              "id": 1,
              "question_type_id": 1,
              "question_caption": "Do you agree in same sex marriage?",
              "question_isactive": 1,
              "question_isdeleted": 0,
              "created_at": "2017-05-10 00:00:00",
              "updated_at": "2017-05-10 00:00:00",
              "respondents": 200,
              "isFeatured": 1,
              "question_img": "assets/images/sem.jpg"
            },
            {
              "id": 2,
              "question_type_id": 1,
              "question_caption": "Do you trust the President?",
              "question_isactive": 1,
              "question_isdeleted": 0,
              "created_at": "2017-05-10 00:00:00",
              "updated_at": "2017-05-10 00:00:00",
              "respondents": 300,
              "isFeatured": 1,
              "question_img": "assets/images/pres.jpg"
            },
            {
              "id": 3,
              "question_type_id": 2,
              "question_caption": "How was your experience in our products",
              "question_isactive": 1,
              "question_isdeleted": 0,
              "created_at": "2017-05-10 00:00:00",
              "updated_at": "2017-05-10 00:00:00",
              "respondents": 406,
              "isFeatured": 1,
              "question_img": "assets/images/product.jpg"
            },
            {
              "id": 4,
              "question_type_id": 2,
              "question_caption": "What is your reaction to the rejection of Ms. Gina Lopez?",
              "question_isactive": 2,
              "question_isdeleted": 0,
              "created_at": "2017-05-10 00:00:00",
              "updated_at": "2017-05-10 00:00:00",
              "respondents": 106,
              "isFeatured": 1,
              "question_img": "assets/images/gina lopez.jpg"
            }
        ]
      ).map(data => <ISurveyModel[]> data)
      
      // this._http.get(`${this._url}/questions?isFeatured=1`)
      // .map((res: Response) => <ISurveyModel[]> res.json())
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
