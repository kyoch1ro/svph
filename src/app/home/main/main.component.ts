import { Component, OnInit } from '@angular/core';
import { ISurveyService } from 'app/survey/isurvey.service';
import { DevSurveyService } from 'app/survey/shared/dev-survey.service';
import { ISurveyModel } from 'app/survey/isurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : ISurveyService;
  public subscription: Observable<any>;

  errorMsg: string;
  surveys: ISurveyModel[];
  // public surveys: Survey[] = [];
  public activeSurveyIndx = new Subject<number>();

  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;

  constructor(surveySrvc : DevSurveyService) {
    this._surveySrvc = surveySrvc;
   }

  ngOnInit() {
    
    this.loadFeaturedSurveys();

    this.activeSurveyIndx.subscribe(
      indx => {
        this.activeQuestion = this.surveys[indx].question_caption;
        this.activeRespondents = Number(this.surveys[indx].respondents);
        this.activeId = Number(this.surveys[indx].id);

      }
    )
  }

  showSignInModal(){
    console.log('yeaho');
  }



  loadFeaturedSurveys(){
    this.subscription = this._surveySrvc.getFeaturedSurveys();
    this.subscription
    .subscribe(
      res => this.surveys = res,
      err => this.errorMsg = <any> err,
      () => this.activeSurveyIndx.next(0)
    )
  }

  updateIndx(val){
    this.activeSurveyIndx.next(val);
  }
}
