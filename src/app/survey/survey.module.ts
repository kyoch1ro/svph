import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './shared/survey.service';
import { DevSurveyService } from './shared/dev-survey.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    SurveyService,DevSurveyService
  ]
})
export class SurveyModule { }
