import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'survey-list-pagination',
  templateUrl: './survey-list-pagination.component.html',
  styleUrls: ['./survey-list-pagination.component.css']
})
export class SurveyListPaginationComponent implements OnInit {
  Arr = Array; 
  @Input() dataCount: number = 0;
  
  // pages: number[];
  constructor() { }

  ngOnInit() {
    // this.pages = Array(5).fill().map((x,i)=>i);
    
    // this.setPages();
  }


  setPages(){
    // this.pages = this.surveyCount;
  }

}
