import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyCarouselComponent } from './survey-carousel/survey-carousel.component';
import { SurveyCarouselPageComponent } from './survey-carousel-page/survey-carousel-page.component';



@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [LoginComponent, NotFoundComponent, SurveyCarouselComponent, SurveyCarouselPageComponent],
  exports:[
    CommonModule,
    NgbModule,
    SurveyCarouselComponent,
    LoginComponent
  ],
  providers: [
    LoginComponent
  ]
})
export class SharedModule { }
