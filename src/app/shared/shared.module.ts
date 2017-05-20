import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule  }  from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NotFoundComponent],
  exports:[
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class SharedModule { }
