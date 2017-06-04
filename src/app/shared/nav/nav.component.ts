import { Component, OnInit,Input } from '@angular/core';
import { INavLink } from 'app/core/contracts/INavLink';
@Component({
  selector: 'shrd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() links : INavLink[];

  constructor() {
  }

  ngOnInit() {
   
  }

}
