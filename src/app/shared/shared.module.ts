import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule  }  from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InputHelpComponent } from './input-help/input-help.component';
import { NavComponent } from './nav/nav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { WellComponent } from './well/well.component';
import { NavLinkComponent } from './nav/nav-link.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { CheckInputComponent } from './check-input/check-input.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NotFoundComponent, ModalComponent, RegisterFormComponent, InputHelpComponent, NavComponent, PaginationComponent, WellComponent, NavLinkComponent, SearchBoxComponent, SearchBoxComponent, SurveyFormComponent, RadioInputComponent, CheckInputComponent, UploadImageComponent],
  exports:[
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    ModalComponent,
    RegisterFormComponent,
    InputHelpComponent,
    NavComponent,
    PaginationComponent,
    WellComponent,
    SearchBoxComponent,
    SurveyFormComponent,
    RadioInputComponent,
    CheckInputComponent,
    UploadImageComponent
  ],
  providers: [
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
