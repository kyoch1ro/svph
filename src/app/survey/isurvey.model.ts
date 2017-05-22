export interface ISurvey{
    id : number;
    question_type_id: number;
    question_caption: string;
    question_isactive: number;
    question_isdeleted: number;
    created_at : string;
    updated_at : string;
    respondents: number;
    isFeatured: number;
}
