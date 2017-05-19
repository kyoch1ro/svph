import { Component, OnInit, Input } from '@angular/core';
import { FeaturedSurvey } from './f-survey.model';
@Component({
  selector: 'app-survey-carousel',
  templateUrl: './survey-carousel.component.html',
  styleUrls: ['./survey-carousel.component.css']
})
export class SurveyCarouselComponent implements OnInit {
  @Input() fSurveys : FeaturedSurvey[];
  surveyId : string;
  question : string; 
  respondents: string;
  constructor() {
    
   }

  ngOnInit() {
    this.fSurveys[0].isActive = true;
    this.setView(); 
  }


   setView(){
    this.fSurveys.forEach(el => {
      if (el.isActive == true){
            this.question = el.question;
            this.respondents = el.respondent;
            this.surveyId = el.id;
      }
    });
  }

  updateData(data : FeaturedSurvey[]){
    this.fSurveys = data;
    this.setView();
  }

}
