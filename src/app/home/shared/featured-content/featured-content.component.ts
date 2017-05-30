import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'home-featured-content',
  template: `
          <div class="f-active-question d-flex">
            <div class="f-active-content text-center">
              {{ question }}
            </div>
          </div>
          <div class="f-active-info d-flex" >
            <div class="p-2 flex-item-1 d-flex justify-content-end">
              <div><i class="fa fa-circle" aria-hidden="true" style="color:#e74c3c"></i> {{respondents |  number }} Respondents</div>
            </div>
            <div class="p-2 flex-item-1 d-flex justify-content-start">
              <div>
                <button [disabled]="id == 0" class="btn pending btn-opaque btn-sm btn-wide" (click)="redirect(id)">Vote</button>
              </div>
            </div>
          </div>`
})
export class FeaturedContentComponent implements OnInit {
  @HostBinding('class') classes = 'f-caption d-flex flex-column';
  @Input() id: number = 1;
  @Input() question: string = "Loading Featured Questions...";
  @Input() respondents : number = 0;


  constructor() { }

  ngOnInit() {
  }


  redirect(val){
    console.log(val);
    
  }

}
