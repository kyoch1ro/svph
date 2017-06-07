import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import { ISurveyService } from 'app/core/contracts/ISurvey.service';
import { SurveyService } from 'app/survey/survey.service';
import { OptionsService } from './../options/options.service';
import { IOptionDTO } from './../options/ioption';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';
import { Survey } from 'app/survey/survey.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { IHttpService } from 'app/core/contracts/ihttp-service';




@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: Survey;
  options: IOptionDTO[];
  constructor(
              @Inject(SurveyService) private _surveyService: IHttpService, 
              @Inject(OptionsService) private _optionsService: IHttpService, 
              private _route: ActivatedRoute) { }
  private _surveyIdSubscription: ISubscription;



  ngOnInit() {
    this._surveyIdSubscription = this._route.params
                                    .subscribe(
                                      params => {
                                        this.loadSurvey(<number> params['id']);
                                        this.loadOptions(<number> params['id']);
                                      },
                                      err => {},
                                      () => this._surveyIdSubscription.unsubscribe()
                                    )
  }




  loadSurvey(id: number){
   let subscription : ISubscription = this._surveyService.getById(id).subscribe(
      res => this.survey = <ISurveyModel> res['question'],
      err => {},
      () => subscription.unsubscribe()
    );
  }


  loadOptions(id: number){
    let subscription : ISubscription = this._optionsService.list(id)
                                        .subscribe(
                                          res => this.options = <IOptionDTO[]> res['option'],
                                          err => {},
                                          () => subscription.unsubscribe()
                                        );
  }




  vote(form: any){
    console.log(form);
  }
}
