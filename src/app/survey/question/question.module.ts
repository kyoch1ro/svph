import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsModule } from './options/options.module';
import { OPTION_PROVIDERS } from './question.service';
import { QuestionInputComponent } from './shared/question-input/question-input.component';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    OptionsModule,
    SharedModule
  ],
  declarations: [QuestionInputComponent],
  providers: [ OPTION_PROVIDERS ],
  exports: [ QuestionInputComponent ]
})
export class QuestionModule { }
