import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'survey-row',
  templateUrl: './survey-row.component.html',
  styleUrls: ['./survey-row.component.css']
})
export class SurveyRowComponent implements OnInit {
@HostBinding('class') classes = 'survey-host';
  constructor() { }

  ngOnInit() {
  }

}
