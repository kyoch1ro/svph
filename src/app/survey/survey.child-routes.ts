import { Routes } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';
import { LoginGuard } from 'app/core/guards/login.guard';
import { SurveyComponent } from './survey/survey.component';


export const routes: Routes = [
  
  
  { 
      path: 'page/:page', 
      component: SurveysComponent
  },
  { 
      path: ':id', 
      component: SurveyComponent
  },
  {
    path: '',
    component: SurveysComponent
  }
  
  
];