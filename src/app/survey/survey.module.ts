import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './shared/survey.service';
import { DevSurveyService } from './shared/dev-survey.service';
import { SurveysComponent } from './surveys/surveys.component';
import { SharedModule } from 'app/shared/shared.module';
import { SurveyComponent } from './survey/survey.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SurveysComponent, SurveyComponent, MainComponent],
  providers:[
    SurveyService,DevSurveyService
  ]
})
export class SurveyModule { }
