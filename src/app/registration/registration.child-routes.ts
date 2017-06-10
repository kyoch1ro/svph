import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';



export const routes: Routes = [
  { 
      path: 'interests', 
      component: InterestsComponent
  },

  {
    path: '',
    component: ProfileComponent
  }
  
  
];