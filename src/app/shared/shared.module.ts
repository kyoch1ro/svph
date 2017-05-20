import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyCarouselComponent } from './survey-carousel/survey-carousel.component';
import { SurveyCarouselPageComponent } from './survey-carousel-page/survey-carousel-page.component';
import { ReactiveFormsModule  }  from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NotFoundComponent, SurveyCarouselComponent, SurveyCarouselPageComponent],
  exports:[
    CommonModule,
    NgbModule,
    SurveyCarouselComponent,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class SharedModule { }
