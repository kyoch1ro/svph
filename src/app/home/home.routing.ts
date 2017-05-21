import { Router, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


export const homeRouting = RouterModule.forChild([
    { path: '', component: MainComponent },
])