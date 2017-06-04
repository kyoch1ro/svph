import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { AuthService } from 'app/core/services/auth.service';
import { Router }  from '@angular/router';


@Component({
  selector: 'admn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model : LoginModel;
  constructor(authService: AuthService,
             private router: Router) { 
    this.model = new LoginModel(authService,router);
  }
  ngOnInit() {
  }

  loginUser(form: any){
    this.model.login(form);
  }
}
