import { Component, OnInit, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { ISurveyDTO } from 'app/survey/isurvey';
@Component({
  selector: 'home-featured-navigation',
  template: `
      <div class="mr-auto">
        <i class="fa " aria-hidden="true"
          
          *ngFor="let btn of surveys; let i = index" (click)="updateQuestion(i)"
          [ngClass]="{
            'fa-circle': activeIndx == i,
            'fa-circle-thin': activeIndx != i
          }"
        ></i>
      </div>
  `,
})
export class FeaturedNavigationComponent implements OnInit {
  @HostBinding('class') classes = 'f-pagination d-flex';
  @Input() activeIndx : number = 0;
  @Input() surveys : ISurveyDTO[] = [];
  @Output() newIndx : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  updateQuestion(val){
    this.newIndx.emit(val)
  }
}
