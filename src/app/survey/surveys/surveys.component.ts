import { Component, OnInit } from '@angular/core';
import { ISurveyService } from './../isurvey.service';
import { DevSurveyService } from './../shared/dev-survey.service';
import { ISurveyModel } from './../isurvey.model';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  private _surveyService: ISurveyService;
  surveys : ISurveyModel[];

  constructor(surveyService: DevSurveyService) {
    this._surveyService = surveyService;
   }



  ngOnInit() {
    this.loadSurveys(1);
  }

  loadSurveys(page: number){
    this._surveyService.getSurveys(page).subscribe(data => this.surveys = data);
  }



}
