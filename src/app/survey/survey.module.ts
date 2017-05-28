import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './shared/survey.service';
import { DevSurveyService } from './shared/dev-survey.service';
import { SurveysComponent } from './surveys/surveys.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SurveysComponent],
  providers:[
    SurveyService,DevSurveyService
  ]
})
export class SurveyModule { }
