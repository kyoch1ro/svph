import { Observable } from 'rxjs/Observable';
import { ISurveyModel } from './isurvey.model';
import { Survey } from './survey.model';


export interface ISurveyService{
    getFeaturedSurveys(): Observable<ISurveyModel[]>;
}