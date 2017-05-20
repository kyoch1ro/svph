import { Observable } from 'rxjs/Observable';
import { Survey } from './survey.model';


export interface iSurvey{
    getFeaturedSurveys(): Observable<Survey>;
}