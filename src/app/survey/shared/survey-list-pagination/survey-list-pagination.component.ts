import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'survey-list-pagination',
  templateUrl: './survey-list-pagination.component.html',
  styleUrls: ['./survey-list-pagination.component.css']
})
export class SurveyListPaginationComponent implements OnInit {
  @Input() surveyCount: number = 0;
  pages: number;
  constructor() { }

  ngOnInit() {
    this.setPages();
  }


  setPages(){
    this.pages = this.surveyCount;
  }

}
