import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './survey.service';
import { DevSurveyService } from './dev-survey.service';

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
