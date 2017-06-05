import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';


@Component({
  selector: 'survey-row',
  templateUrl: './survey-row.component.html',
  styleUrls: ['./survey-row.component.css']
})
export class SurveyRowComponent implements OnInit {
  @HostBinding('class') classes = 'survey-host';
  @Input() survey: ISurveyModel;
  constructor() { }
  
  

  ngOnInit() {
  }

}
