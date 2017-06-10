import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
  { 
      path: 'interests', 
      component: InterestsComponent
  },
  { 
      path: 'details', 
      component: DetailsComponent
  },

  {
    path: '',
    component: ProfileComponent
  }
  
  
];