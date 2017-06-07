import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { USER_PROVIDERS } from './user.service';
import { LoginFormComponent } from './shared/login-form/login-form.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ],
  providers:[
    USER_PROVIDERS
  ]
})
export class UserModule { }
