import { Router, RouterModule } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';
import { LoginGuard } from 'app/core/login.guard';
import { MainComponent } from './main/main.component';
export const surveyRouting = RouterModule.forChild([
    { 
        path: 'surveys', 
        component: MainComponent,
        canActivate: [ LoginGuard ]
    },
])