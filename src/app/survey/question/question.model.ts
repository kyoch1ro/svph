import {} from '@angular/core'
import { IQuestionDTO, IQuestionBL } from './iquestion';
import { IOptionDTO } from './options/ioption';
export class Question implements IQuestionDTO{
    question_id: number;
    option_type: string;
    question_caption: string;
    survey_id: number;
    options: IOptionDTO[];


    construct(obj?: IQuestionDTO){
        this.question_id = obj && obj.question_id || null;
        this.option_type = obj && obj.option_type || null;
        this.question_caption = obj && obj.question_caption || null;
        this.survey_id = obj && obj.survey_id || null;
        this.options = obj && obj.options || null;
    }
}