import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { DevUserService } from './shared/dev-user.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers:[
    DevUserService
  ]
})
export class UserModule { }
