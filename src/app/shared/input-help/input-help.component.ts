import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-input-help',
  template: `
    <small class="form-text text-{{type}} ">
      <ng-content></ng-content>
    </small>
  
  `,
})
export class InputHelpComponent implements OnInit {
  @Input() type : string = 'muted';
  constructor() { }

  ngOnInit() {
  }

}
