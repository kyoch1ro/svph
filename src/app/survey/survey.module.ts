import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SURVEY_PROVIDERS } from './survey.service';
import { SurveysComponent } from './surveys/surveys.component';
import { MainComponent } from './main/main.component';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { SurveyRowComponent } from './shared/survey-row/survey-row.component';
import { SurveyListSearchComponent } from './shared/survey-list-search/survey-list-search.component';
import { SurveyListNavComponent } from './shared/survey-list-nav/survey-list-nav.component';
import { SurveyListContainerComponent } from './shared/survey-list-container/survey-list-container.component';
import { SurveyListPaginationComponent } from './shared/survey-list-pagination/survey-list-pagination.component';
import { PollOptionComponent } from './shared/poll-option/poll-option.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { QuestionModule } from './question/question.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryModule,
    FormsModule,
    TypeModule,
    QuestionModule
  ],
  declarations: [SurveysComponent, MainComponent, SurveyRowComponent, SurveyListSearchComponent, SurveyListNavComponent, SurveyListContainerComponent, SurveyListPaginationComponent, PollOptionComponent, ViewComponent],
  providers:[
    SURVEY_PROVIDERS
  ]
})
export class SurveyModule { }
