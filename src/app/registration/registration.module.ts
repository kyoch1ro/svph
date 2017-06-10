import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MainComponent, ProfileComponent, InterestsComponent, RegistrationFormComponent]
})
export class RegistrationModule { }
