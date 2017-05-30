import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEV_AUTH_PROVIDERS} from './dev-auth.service';
import { LoginGuard } from './login.guard';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[
    
  ],
  providers:[
    DEV_AUTH_PROVIDERS,
    LoginGuard
  ]
})
export class CoreModule { }
