import { Component, OnInit } from '@angular/core';
import { adminNavLinks,userNavLinks } from 'app/core/global.const';
import { INavLink } from 'app/core/contracts/INavLink';
import { iAuth } from 'app/core/services/i-auth.service';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  links: INavLink[];
  private _authService: iAuth;

  constructor(authService: AuthService) {
    this._authService = authService;
   }

  ngOnInit() {
    this.links = (this._authService.isAdmin()) ? adminNavLinks : userNavLinks; 
  }

}
