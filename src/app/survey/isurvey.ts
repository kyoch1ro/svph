import { IOptionDTO } from './options/ioption';
export interface ISurveyDTO{
    id : number;
    survey_category_id : number;
    survey_isactive : number;
    survey_isdeleted : number;
    survey_isfeatured : number;
    survey_title : string;
    survey_type_id : number;
    updated_at : string;
    respondents: number;
    survey_img: string;
    options: IOptionDTO[];
}



export interface ISurveyBL{

}

