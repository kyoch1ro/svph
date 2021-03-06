import { Router, RouterModule } from '@angular/router';
import { LoginGuard } from 'app/core/guards/login.guard';
import { NotLoggedInGuard } from 'app/core/guards/not-logged-in.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MainComponent as HomeMain } from 'app/home/main/main.component';
import { MainComponent as SurveyMain } from 'app/survey/main/main.component';
import { MainComponent as AdminHome } from 'app/admin/main/main.component';
import { routes as SurveyChild } from 'app/survey/survey.child-routes';
import { routes as AdminChild } from 'app/admin/admin.child-routes';
import { LoginComponent as AdminLogin } from 'app/admin/login/login.component';


import { routes as RegistrationChild } from 'app/registration/registration.child-routes';
import { MainComponent as RegistrationMain } from 'app/registration/main/main.component';


export const routing = RouterModule.forRoot([
    { path: 'admin/login', component: AdminLogin },
    { 
        path: 'registration', 
        component: RegistrationMain,
        children:  RegistrationChild
    },
    { 
        path: 'admin', 
        component: AdminHome,
        children:  AdminChild
        
    },
    { 
        path: 'surveys', 
        component: SurveyMain,
        canActivate: [ LoginGuard ],
        children:  SurveyChild,
        
    },
    { 
        path: '',
        canActivate: [ NotLoggedInGuard ],
        component: HomeMain,
     },
    { path: '**', component: NotFoundComponent }
])