import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import { IFeaturable } from 'app/core/contracts/ifeaturable';
import { SurveyService } from 'app/survey/survey.service';
import { OptionsService } from 'app/survey/question/options/options.service';
import { ISurveyDTO } from 'app/survey/isurvey';
import { IQuestionDTO } from 'app/survey/question/iquestion';
import { IChild }  from 'app/core/contracts/ichild';
import { Survey } from 'app/survey/survey.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { IHttpService, IOptionHttpService } from 'app/core/contracts/ihttp-service';
import { QuestionService } from './../question/question.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private _survey :  ReplaySubject<ISurveyDTO> = new ReplaySubject<ISurveyDTO>();
  private _questions :  ReplaySubject<IQuestionDTO[]> = new ReplaySubject<IQuestionDTO[]>();

  survey: ISurveyDTO;
  questions :  IQuestionDTO[];
  form_data: any[] = [];
  private _selected_options: any[] = [];

  constructor(
              @Inject(SurveyService) private _surveyService: IHttpService, 
              @Inject(OptionsService) private _optionsService: IOptionHttpService,
              @Inject(QuestionService) private _questionService: IChild,
              private _route: ActivatedRoute,
              private _fb: FormBuilder) { }
  private _surveyIdSubscription: ISubscription;

  

  ngOnInit() {
   let id_param_subscription = 
    this._route.params
      .subscribe(
        params => this.setSurvey(<number> params['id']),
        err => {},
        () => this._surveyIdSubscription.unsubscribe()
    );

    let surveySubscription = this._survey.subscribe(
      survey => {
        this.survey = <ISurveyDTO> survey;
        this.setQuestions(survey.id);
      }
    )

    let questionSubscription = this._questions.subscribe(
      questions => {
        this.questions = <IQuestionDTO[]> questions;
        this.questions.forEach(question => {
          this.form_data.push({
            question_id: question.question_id,
            question_type: question.option_type.toLowerCase(),
            selected_option: (question.option_type.toLowerCase() == 'radio') ? '' : [] 
          })
        })
      }
    )

  }

  setSurvey(id: number){
   let subscription : ISubscription = this._surveyService.getById(id).subscribe(
      res => {
        this._survey.next(<ISurveyDTO> res['survey']);
      },
      err => {},
      () => subscription.unsubscribe()
    );
  }

  setQuestions(id: number){
     let subscription : ISubscription = this._questionService.getByParentId(id).subscribe(
      res => {
        this._questions.next(<IQuestionDTO[]> res['questionnaire'])
        
      },
      err => {},
      () => subscription.unsubscribe()
    );
  }
  
  toggleSelected(event,quest_indx,option_id){
    if(event.target.checked){
      this.form_data[quest_indx].selected_option.push(option_id);
    }else{
      var index = this.form_data[quest_indx].selected_option.indexOf(option_id);

      if(index!=-1){

        this.form_data[quest_indx].selected_option.splice(index, 1);
      }
    }
  }

  vote(){
    let error : number = 0;
    this._selected_options = [];
    this.form_data.forEach(data => {
      if(data.question_type == 'radio' && (!data.selected_option)){
        error++;
      }


      if(Array.isArray(data.selected_option)){
        data.selected_option.forEach(option_id => {
          this._selected_options.push(option_id)
        })
      }else{
        this._selected_options.push(data.selected_option)
      }
      
    })

    if(error == 0){
      let subs : ISubscription = this._optionsService.saveOptions({
          selected_options : this._selected_options
      }).subscribe(
        data => console.log(data),
        err => {},
        () => subs.unsubscribe()
      )
    }

    console.log();
  }


  private _getAllVote(){

  }
}
