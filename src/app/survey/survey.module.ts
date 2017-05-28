import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './shared/survey.service';
import { DevSurveyService } from './shared/dev-survey.service';
import { SurveysComponent } from './surveys/surveys.component';
import { SharedModule } from 'app/shared/shared.module';
import { SurveyComponent } from './survey/survey.component';
import { MainComponent } from './main/main.component';
import { SurveyRowComponent } from './shared/survey-row/survey-row.component';
import { SurveyListSearchComponent } from './shared/survey-list-search/survey-list-search.component';
import { SurveyListNavComponent } from './shared/survey-list-nav/survey-list-nav.component';
import { SurveyListContainerComponent } from './shared/survey-list-container/survey-list-container.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SurveysComponent, SurveyComponent, MainComponent, SurveyRowComponent, SurveyListSearchComponent, SurveyListNavComponent, SurveyListContainerComponent],
  providers:[
    SurveyService,DevSurveyService
  ]
})
export class SurveyModule { }
