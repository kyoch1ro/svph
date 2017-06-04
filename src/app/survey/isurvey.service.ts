import { Observable } from 'rxjs/Observable';
import { ISurveyModel } from './isurvey.model';


export interface ISurveyService{
    getFeaturedSurveys(): Observable<any[]>;
    getSurveys(page? : number) : Observable<any[]>;
    getSurveysCount(): Observable<number>;
}