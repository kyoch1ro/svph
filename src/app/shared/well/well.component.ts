import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shrd-well',
  template: `
  <div class="alert alert-{{type}}" role="alert">
    <ng-content></ng-content>
  </div>
  
  `
})
export class WellComponent implements OnInit {
  @Input() type: string;
  constructor() { }
  ngOnInit() {
  }

}
