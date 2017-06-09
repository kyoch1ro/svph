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
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { QuestionService } from './../question/question.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private _survey :  ReplaySubject<ISurveyDTO> = new ReplaySubject<ISurveyDTO>();
  survey: ISurveyDTO;
  questions :  IQuestionDTO[];
  form_data: any;
  constructor(
              @Inject(SurveyService) private _surveyService: IHttpService, 
              @Inject(OptionsService) private _optionsService: IHttpService,
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
        this.survey = survey;
        this.setQuestions(survey.id);
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
        this.questions = <IQuestionDTO[]> res['questionnaire'];
      },
      err => {},
      () => subscription.unsubscribe()
    );
  }


  onSubmit(value: any){
    console.log(value);
  }
  


  vote(form: any){
    console.log(form);
  }
}
