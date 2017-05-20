import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'app/survey/survey.model';
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
    this.setView();
    
  }


   setView(){
    // this.fSurveys.forEach(el => {
    //   if (el.isActive == true){
    //         this.question = el.question;
    //         this.respondents = el.respondent;
    //         this.surveyId = el.id;
    //   }
    // });
  }

  updateData(index){
    
    // this.fSurveys.forEach(el => {
    //   if (el.isActive == true){

    //   }
    // });
    this.fSurveys[index].isActive = true;
    console.log(index);
  }

}
