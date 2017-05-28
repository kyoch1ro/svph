import { Router, RouterModule } from '@angular/router';
import { SurveysComponent } from './surveys/surveys.component';


export const surveyRouting = RouterModule.forChild([
    { path: 'surveys', component: SurveysComponent },
])