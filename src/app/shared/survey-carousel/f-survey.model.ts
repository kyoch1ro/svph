export class FeaturedSurvey{
    public id?: string;
    public respondent: string;
    public question: string;
    public isActive: boolean;

    constructor(obj?: any){
        this.id = obj && obj.id;
        this.respondent = obj && obj.respondent;
        this.question = obj && obj.question;
        this.isActive = obj && obj.isActive || false;
    }

}