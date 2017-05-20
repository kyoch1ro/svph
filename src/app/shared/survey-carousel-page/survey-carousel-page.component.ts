import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FeaturedSurvey } from './../survey-carousel/f-survey.model';
import { Survey} from 'app/survey/survey.model';

@Component({
  selector: 'survey-carousel-page',
  template: `
    <div [ngClass]="'button-holder'">
      <i *ngFor="let btn of fSurveys;let i = index" (click)="onClick(i)" class="fa fa-circle" 
          [attr.index]="i" aria-hidden="true"></i>
    </div>
  `,

  styles:[
    `

    `
  ]
})
export class SurveyCarouselPageComponent implements OnInit {
  @Input() fSurveys: FeaturedSurvey[];
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(val){
    this.change.emit(val);
  }



}
