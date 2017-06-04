import { Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyAddComponent } from './survey-add/survey-add.component';

export const route: Routes = [
    { 
        path: 'list', 
        component: SurveyListComponent
    },
    { 
        path: 'add', 
        component: SurveyAddComponent
    }
]

