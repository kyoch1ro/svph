import { ISurveyBL, ISurveyDTO } from './isurvey';
import { IOptionDTO } from './options/ioption';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { ISubscription } from 'rxjs/Subscription';
export class Survey implements ISurveyDTO{
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

    constructor(private _surveyService: IHttpService,
                private _optionsService: IHttpService, 
                obj?: ISurveyDTO){
        this.id                 = obj && obj.id                 || null;
        this.survey_category_id = obj && obj.survey_category_id || null;
        this.survey_isactive    = obj && obj.survey_isactive    || null;
        this.survey_isdeleted   = obj && obj.survey_isdeleted   || null;
        this.survey_isfeatured  = obj && obj.survey_isfeatured  || null;
        this.survey_title       = obj && obj.survey_title       || null;
        this.survey_type_id     = obj && obj.survey_type_id     || null;
        this.updated_at         = obj && obj.updated_at         || null;
        this.respondents        = obj && obj.respondents        || null;
        this.survey_img         = obj && obj.survey_img         || null;
        this.options            = obj && obj.options            || null;

        if(this.id) this.setOptions();
    }




    setOptions(){
        let subscription =  this._optionsService.list(this.id)
                                .subscribe(response => console.log(response));
    }






}