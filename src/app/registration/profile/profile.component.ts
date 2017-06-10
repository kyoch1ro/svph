import { Component, OnInit } from '@angular/core';
import { RegistrationFormModel } from './../shared/registration-form/registration-form.model';
import { IAlert } from 'app/core/contracts/ialert';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registrationModel: IAlert = { msg: 'asdasd', isSuccess: false};
  constructor() {

  }

  ngOnInit() {
  }

}
