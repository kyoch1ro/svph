import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';
import { SurveysComponent } from './surveys/surveys.component';
import { route as surveyChilden } from './survey.child-routes';
import { SurveyTypeComponent } from './survey-type/survey-type.component';









export const routes: Routes = [
    { 
        path: 'surveys/type', 
        component: SurveyTypeComponent
    },
    { 
        path: 'surveys/category', 
        component: SurveyCategoryComponent
    },
    { 
        path: 'surveys', 
        component: SurveysComponent,
        children: surveyChilden
    },

    {
        path: '',
        component: SurveysComponent
    }
];



