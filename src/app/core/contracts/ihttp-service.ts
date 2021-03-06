import { Observable } from 'rxjs/Observable';


export interface IHttpService{
  getById(id: number): Observable<any>;
  list(id?: number): Observable<any>;
  add(data: any): Observable<any>;
  delete(id: number): Observable<any>;
  update(id: number): Observable<any>;
  count(): Observable<any>;
}






export interface IUserHttpService extends IHttpService{
  saveOtherDetails(form: any): Observable<any>;
  registerUser(form: any): Observable<any>;
}



export interface IOptionHttpService extends IHttpService{
  saveOptions(form: any): Observable<any>; //mmove to surveyanswer
}

export interface ISurveyService extends IHttpService{
   userHasVote(survey_id: number): Observable<any>;
   getFeaturedList(): Observable<any>;
}