import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import { IFeaturable } from 'app/core/contracts/ifeaturable';
import { SurveyService } from 'app/survey/survey.service';
import { OptionsService } from './../options/options.service';
import { IOptionDTO } from './../options/ioption';
import { ISurveyDTO } from 'app/survey/isurvey';
import { Survey } from 'app/survey/survey.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { IHttpService } from 'app/core/contracts/ihttp-service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
                                        this.setSurvey(<number> params['id']);
                                        // this.loadOptions(<number> params['id']);
                                      },
                                      err => {},
                                      () => this._surveyIdSubscription.unsubscribe()
                                    )
  }




  setSurvey(id: number){
   let subscription : ISubscription = this._surveyService.getById(id).subscribe(
      res => this.survey = new Survey(this._surveyService,this._optionsService,res['survey']),
      err => {},
      () => subscription.unsubscribe()
    );
  }


  // loadOptions(id: number){
  //   let subscription : ISubscription = this._optionsService.list(id)
  //                                       .subscribe(
  //                                         res => this.options = <IOptionDTO[]> res['option'],
  //                                         err => {},
  //                                         () => subscription.unsubscribe()
  //                                       );
  // }




  vote(form: any){
    console.log(form);
  }
}
