import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './shared/nav/nav.component';
import { FootComponent } from './shared/foot/foot.component'


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MainComponent, NavComponent, FootComponent]
})
export class HomeModule { }
