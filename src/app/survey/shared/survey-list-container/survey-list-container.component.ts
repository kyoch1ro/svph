import { Component, OnInit, Input } from '@angular/core';
import { ISurveyDTO } from 'app/survey/isurvey';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'survey-list-container',
  templateUrl: './survey-list-container.component.html',
  styleUrls: ['./survey-list-container.component.css']
})
export class SurveyListContainerComponent implements OnInit {
  @Input() 
  set surveys(value){
    this._surveys.next(value);
  }
  get surveys(){
    return this._surveys.getValue();
  }
  
  private _surveys = new BehaviorSubject<ISurveyDTO[]>([]);

  constructor() {

  }
  ngOnInit() {

  }

}
