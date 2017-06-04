import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyTypeComponent } from './survey-type/survey-type.component';






@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent, MainComponent, SurveyCategoryComponent, SurveysComponent, SurveyTypeComponent]
})
export class AdminModule { }
