import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { USER_PROVIDERS } from './user.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers:[
    USER_PROVIDERS
  ]
})
export class UserModule { }
