import { Routes } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';
import { LoginGuard } from 'app/core/guards/login.guard';
import { ViewComponent } from './view/view.component';


export const routes: Routes = [
  { 
      path: 'page/:page', 
      component: SurveysComponent
  },
  { 
      path: ':id', 
      component: ViewComponent
  },
  {
    path: '',
    component: SurveysComponent
  }
  
  
];