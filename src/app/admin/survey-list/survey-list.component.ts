import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';
import { IPaginated } from 'app/core/contracts/IPaginated';
import { ISurveyService } from 'app/core/contracts/ISurvey.service';
import { SurveyService } from 'app/survey/survey.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'admn-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit,IPaginated {
  private _subscription : ISubscription;
  private _surveyService: ISurveyService;
  data : ISurveyModel[];
  count: number;

  constructor(surveyService: SurveyService, private _route: ActivatedRoute) {
    this._surveyService = surveyService;
  }
  ngOnInit() {
    this.load(1);
  }

  load(page?: number){
    var _page = (page) ? page : 1;
    this._subscription = this._surveyService.getSurveys()
                         .subscribe(data => this.data = <ISurveyModel[]> data['questions']);
  }

  search(val){
    console.log(val)
  }
}
