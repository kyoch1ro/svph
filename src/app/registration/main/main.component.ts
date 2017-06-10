import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reg-main',
  templateUrl: './main.component.html',
  styles:[
  `.container{
      margin-top: 8vh;    
  }
  .heading div{
    margin: 0 5px;
  }
  `
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
