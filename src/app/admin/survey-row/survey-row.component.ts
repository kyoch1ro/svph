import { Component, OnInit, Input, Output } from '@angular/core';
import { ISurveyDTO } from 'app/survey/isurvey';

@Component({
  selector: 'admn-survey-row',
  template: `
  <div class="c-pointer row hover p-2" (click)="yeah()" >
      <div class="col-md-4">
          <div class="img-holder">
              <img src="{{survey.question_img}}" class="img-fluid img-thumbnail" alt="">
          </div>
      </div>
      <div class="col-md-8 p-rel d-flex flex-column">
          <div class="f-10">
              <h4>{{survey.question_caption}}</h4>
          </div>
          <div class="survey-info f-80">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            <span>Yes</span>
            <span>No</span>
          </div>
          <div class="button-holder align-self-end f-10">
            <a href="" >{{ survey.respondents }} Respondents</a>
          </div>
      </div>
  </div>
  `
})
export class SurveyRowComponent implements OnInit {
  @Input() survey: ISurveyDTO;
  constructor() { }

  ngOnInit() {
  }


  yeah(){
    console.log('i was fuck!');
  }
}
