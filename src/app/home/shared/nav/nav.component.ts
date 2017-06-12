import { Component, OnInit, HostBinding, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { iAuth } from 'app/core/services/i-auth.service';
import { AuthService } from 'app/core/services/auth.service';
@Component({
  selector: 'home-nav',
  template:`
        <div class="d-flex flex-item-1 justify-content-start">
          <a [routerLink]="['/admin','login']" class="btn btn-primary">SURVEY</a>
        </div>
        <div class="d-flex flex-item-1 justify-content-end">
          <button *ngIf="!isSignIn()"class="btn btn-primary" (click)="signIn()">SIGN IN</button>
          <button *ngIf="isSignIn()"class="btn btn-primary" (click)="signOut()">SIGN OUT</button>
        </div>
  `
})
export class NavComponent implements OnInit {
  @HostBinding('class') classes = 'home-head d-flex align-items-start p-2';
  @Output() signInClick : EventEmitter<any> = new EventEmitter();

  constructor(@Inject(AuthService) private _authService: iAuth ) { 
    console.log(this._authService.isLoggedIn())
  }

  ngOnInit() {
  }


  signIn(){
    
    this.signInClick.emit();
  }

  isSignIn(){
    return this._authService.isLoggedIn();
  }


  signOut(){
    this._authService.logout();
    window.location.reload()
  }

}
