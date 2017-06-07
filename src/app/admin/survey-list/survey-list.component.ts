import { Component, OnInit, Inject } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ISurveyDTO } from 'app/survey/isurvey';
import { IPaginated } from 'app/core/contracts/IPaginated';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { SurveyService } from 'app/survey/survey.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'admn-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit,IPaginated {
  private _subscription : ISubscription;
  data : ISurveyDTO[];
  count: number;

  constructor(@Inject(SurveyService) private _surveyService: IHttpService, private _route: ActivatedRoute) {
  }
  ngOnInit() {
    this.load(1);
  }

  load(page?: number){
    var _page = (page) ? page : 1;
    this._subscription = this._surveyService.list()
                         .subscribe(data => this.data = <ISurveyDTO[]> data['survey']);
  }

  search(val){
    console.log(val)
  }
}
