import { Router, RouterModule } from '@angular/router';
import { LoginGuard } from 'app/core/guards/login.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MainComponent as HomeMain } from 'app/home/main/main.component';
import { MainComponent as SurveyMain } from 'app/survey/main/main.component';
import { MainComponent as AdminHome } from 'app/admin/main/main.component';
import { routes as SurveyChild } from 'app/survey/survey.child-routes';
import { routes as AdminChild } from 'app/admin/admin.child-routes';
import { LoginComponent as AdminLogin } from 'app/admin/login/login.component';





export const routing = RouterModule.forRoot([
    { path: 'admin/login', component: AdminLogin },
    { 
        path: 'admin', 
        component: AdminHome,
        children:  AdminChild
        
    },
    { 
        path: 'surveys', 
        component: SurveyMain,
        children:  SurveyChild
    },
    { path: '', component: HomeMain },
    { path: '**', component: NotFoundComponent }
])