import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'home-foot',
  template: `
    <div class="d-flex flex-item-1 justify-content-start">
      <img src="assets/images/brand.png"  class="flex-inline" style="height:60px" alt="">
      <div class="flex-inline d-flex">
        <h3 class="m-auto"><i>SurveyPH</i></h3>
      </div>
    </div>
    <div class="d-flex flex-item-1 justify-content-end">
      <div class="ml-auto">Facebook / Instragram / Twitter</div>
    </div>
  `,
})
export class FootComponent implements OnInit {
  @HostBinding('class') classes = 'home-foot d-flex align-items-end p-2';
  constructor() { }

  ngOnInit() {
  }

}
