import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, NotFoundComponent],
  exports:[
    CommonModule
  ]
})
export class SharedModule { }
