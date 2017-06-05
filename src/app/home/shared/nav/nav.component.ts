import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'home-nav',
  template:`
        <div class="d-flex flex-item-1 justify-content-start">
          <a [routerLink]="['/admin','login']" class="btn btn-primary">SURVEY</a>
        </div>
        <div class="d-flex flex-item-1 justify-content-end">
          <button class="btn btn-primary" (click)="signIn()">SIGN IN</button>
        </div>
  `
})
export class NavComponent implements OnInit {
  @HostBinding('class') classes = 'home-head d-flex align-items-start p-2';
  @Output() signInClick : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  signIn(){
    this.signInClick.emit();
  }



}
