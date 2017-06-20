import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_PROVIDERS } from './services/auth.service';
import { LoginGuard } from './guards/login.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[
    
  ],
  providers:[
    AUTH_PROVIDERS,
    LoginGuard,
    NotLoggedInGuard
  ]
})
export class CoreModule { }
