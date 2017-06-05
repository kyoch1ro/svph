import { Observable } from 'rxjs/Observable';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';


export interface ISurveyService{
    getFeaturedSurveys(): Observable<any[]>;
    getSurveys(page? : number) : Observable<any[]>;
    getSurveysCount(): Observable<number>;
}