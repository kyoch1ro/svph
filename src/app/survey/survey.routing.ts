import { Router, RouterModule } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';
import { LoginGuard } from 'app/core/login.guard';

export const surveyRouting = RouterModule.forChild([
    { 
        path: 'surveys', 
        component: SurveysComponent,
        canActivate: [ LoginGuard ]
    },
])