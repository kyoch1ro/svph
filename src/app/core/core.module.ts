import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEV_AUTH_PROVIDERS} from './services/dev-auth.service';
import { LoginGuard } from './guards/login.guard';
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
