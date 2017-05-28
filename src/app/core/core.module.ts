import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DEV_AUTH_PROVIDERS} from './dev-auth.service';
import { LoginGuard } from './login.guard';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent],
  exports:[
    NavbarComponent
  ],
  providers:[
    DEV_AUTH_PROVIDERS,
    LoginGuard
  ]
})
export class CoreModule { }
