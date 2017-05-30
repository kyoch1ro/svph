import { Observable } from 'rxjs/Observable';
import { ISurveyModel } from './isurvey.model';


export interface ISurveyService{
    getFeaturedSurveys(): Observable<ISurveyModel[]>;
    getSurveys(page? : number) : Observable<ISurveyModel[]>;
    getSurveysCount(): Observable<number>;
}