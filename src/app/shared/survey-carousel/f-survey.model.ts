import { Survey } from 'app/survey/survey.model';

export class FeaturedSurvey{
    public id?: string;
    public respondent: string;
    public question: string;
    public isActive: boolean;

    constructor(obj?: Survey){
        this.id = obj && obj.id;
        this.respondent = obj && obj.respondents;
        this.question = obj && obj.question_caption;
        this.isActive = false;
    }

}