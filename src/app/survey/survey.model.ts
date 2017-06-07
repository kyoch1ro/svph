import { ISurveyModel } from 'app/core/contracts/ISurvey.model';
export class Survey implements ISurveyModel{
    question_id : number;
    question_type_id: number;
    question_category_id: number;
    question_caption: string;
    updated_at : string;
    question_img: string;
    respondents: number;
}