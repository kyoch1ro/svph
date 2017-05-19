import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyCarouselComponent } from './survey-carousel/survey-carousel.component';
import { SurveyCarouselPageComponent } from './survey-carousel-page/survey-carousel-page.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, NotFoundComponent, SurveyCarouselComponent, SurveyCarouselPageComponent],
  exports:[
    CommonModule,
    SurveyCarouselComponent
  ]
})
export class SharedModule { }
