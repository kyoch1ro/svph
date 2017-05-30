import { Router, RouterModule } from '@angular/router';
import { LoginGuard } from 'app/core/guards/login.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MainComponent as HomeMain } from 'app/home/main/main.component';
import { MainComponent as SurveyHome } from 'app/survey/main/main.component';
import { routes as SurveyChild } from 'app/survey/survey.child-routes';






export const routing = RouterModule.forRoot([
    { 
        path: 'surveys', 
        component: SurveyHome,
        children:  SurveyChild
    },
    { path: '', component: HomeMain },
    { path: '**', component: NotFoundComponent }
])