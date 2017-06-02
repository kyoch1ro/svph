import { Component, OnInit, Input, AfterViewChecked  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterViewChecked {
  Arr = Array;
  @Input() dataCount: number = 0;
  @Input() dataPerPage: number = 10;
  @Input() route: string = '';
  public pages : number;

  constructor() { }

  ngOnInit() {
    this.pages = Math.ceil(this.dataCount / this.dataPerPage);
    console.log(this.dataCount);
    // 
  }


  ngAfterViewChecked(){
    
  }

}
