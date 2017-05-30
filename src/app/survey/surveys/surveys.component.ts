import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISurveyService } from './../isurvey.service';
import { DevSurveyService } from './../shared/dev-survey.service';
import { ISurveyModel } from './../isurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operator/takeWhile';
import { ISubscription } from "rxjs/Subscription";



@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  private _surveyService: ISurveyService;

  private _surveySubscription: ISubscription;

  surveys : ISurveyModel[];
  surveyCount:number;



  constructor(surveyService: DevSurveyService, private _route: ActivatedRoute) {
    this._surveyService = surveyService;
  
   }

  ngOnInit() {
      this.loadSurveys(1);
      this.loadSurveysByPage();
      this.setSurveyCount();
  }

  loadSurveys(page: number){
    this._surveyService.getSurveys(page)
    .subscribe(data => this.surveys = data);
  }

  loadSurveysByPage(){
    this._route.params.subscribe(params => { 
      this.loadSurveys(<number> params['page']);
    })
  }


  setSurveyCount(){
    this._surveySubscription = this._surveyService.getSurveysCount().subscribe(data => this.surveyCount = data);
  }


  ngOnDestroy(){
    this._surveySubscription.unsubscribe();
  }

}
