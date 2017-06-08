import { IOptionDTO } from './options/ioption';

export interface IQuestionDTO{
    question_id: number;
    option_type: string;
    question_caption: string;
    survey_id: number;
    options: IOptionDTO[];
}


export interface IQuestionBL{
    
}