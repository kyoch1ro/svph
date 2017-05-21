import { Component, OnInit } from '@angular/core';
import { iSurvey } from 'app/survey/i-survey.interface';
import { DevSurveyService } from 'app/survey/dev-survey.service';
import { Survey } from 'app/survey/survey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : iSurvey;
  public subscription: Observable<any>;
  public surveys: Survey[] = [];
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
      survey => this.surveys.push(survey), 
      err => console.log(err),
      () => this.activeSurveyIndx.next(0)
    )
  }

  updateIndx(val){
    this.activeSurveyIndx.next(val);
  }
}
