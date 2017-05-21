import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'home-foot',
  template: `
    <div class="d-flex flex-item-1 justify-content-start">asdasd</div>
    <div class="d-flex flex-item-1 justify-content-end">exxx</div>
  `,
})
export class FootComponent implements OnInit {
  @HostBinding('class') classes = 'home-foot d-flex align-items-end';
  constructor() { }

  ngOnInit() {
  }

}
