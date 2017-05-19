import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FeaturedSurvey } from './../survey-carousel/f-survey.model';
@Component({
  selector: 'survey-carousel-page',
  template: `
    <div [ngClass]="'button-holder'">
      <i *ngFor="let btn of fSurveys;let i = index" (click)="onClick(i)" class="fa" 
          [ngClass]="{
            'fa-circle': btn.isActive,
            'fa-circle-thin': !btn.isActive
          }"
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
    
    for(let i : number = 0;i<=this.fSurveys.length ;i++) {
      if(this.fSurveys[i].isActive == true){
        this.fSurveys[i].isActive =false;
        break;
      }
    }
    this.fSurveys[val].isActive = true;
    this.change.emit(this.fSurveys);
  }



}
