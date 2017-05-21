import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routing = RouterModule.forRoot([
    { path: '**', component: NotFoundComponent },
])