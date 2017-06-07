import { Component, OnInit, OnDestroy,Inject } from '@angular/core';
import { IFeaturable } from 'app/core/contracts/ifeaturable';
import { SurveyService } from 'app/survey/survey.service';
import { ISurveyDTO } from 'app/survey/isurvey';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operator/takeWhile';
import { ISubscription } from "rxjs/Subscription";
import { IPaginated } from 'app/core/contracts/IPaginated';
import { IHttpService } from 'app/core/contracts/ihttp-service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit, IPaginated{
  private _surveySubscription: ISubscription;

  data : ISurveyDTO[];
  count:number;

  constructor(@Inject(SurveyService) private _surveyService: IHttpService, private _route: ActivatedRoute) {

  
   }

  ngOnInit() {
      this.load();
      // this.setSurveyCount();
  }

  load(page?: number){
    this._surveySubscription = this._surveyService.list()
    .subscribe(
      data =>{
        this.data = <ISurveyDTO[]> data['survey']
      },
      err => {},
      () => this._surveySubscription.unsubscribe());
  }

  setSurveyCount(){
    this._surveySubscription = this._surveyService.count()
    .subscribe(
    data => this.count = data,
    err=> {},
    () => this._surveySubscription.unsubscribe());
  }

}
