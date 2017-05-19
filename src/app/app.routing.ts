import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
])