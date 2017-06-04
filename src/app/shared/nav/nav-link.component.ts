import { Component, OnInit, Input } from '@angular/core';
import { INavLink } from 'app/core/contracts/INavLink';


@Component({
  selector: 'nav-link',
  template: `
  

  <li class="nav-item active">
   <a class="nav-link" [routerLink]="link">{{title}}</a>
  </li>
  
  `
})

export class NavLinkComponent implements OnInit, INavLink {
  @Input() title: string = '';
  @Input() link: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
