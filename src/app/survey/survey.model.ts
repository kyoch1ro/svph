import { ISurveyModel } from './isurvey.model';
export class Survey implements ISurveyModel{
    question_id : number;
    question_type_id: number;
    question_caption: string;
    updated_at : string;
    respondents: number;
    question_img: string;
}