export class Survey{
    id : string;
    question_type_id: string;
    question_caption: string;
    question_isactive: string;
    question_isdeleted: string;
    created_at : string;
    updated_at : string;
    respondents: string;
    isFeatured: string;


    constructor(obj?: any){
        this.id = obj && obj.id  || null;
        this.question_type_id = obj && obj.question_type_id   || null;
        this.question_caption = obj && obj.question_caption  || null;
        this.question_isactive = obj && obj.question_isactive  || null;
        this.question_isdeleted = obj && obj.question_isdeleted  || null;
        this.created_at = obj && obj.created_at  || null;
        this.updated_at = obj && obj.updated_at  || null;
        this.respondents = obj && obj.respondents  || null;
        this.isFeatured = obj && obj.isFeatured  || null;
    }
}