import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationFormModel } from './../shared/registration-form/registration-form.model';
import { IAlert } from 'app/core/contracts/ialert';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { UserService } from 'app/user/user.service';
import { Router }  from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'reg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registrationModel: IAlert = { msg: '', isSuccess: false};
  pending: false;

  constructor(@Inject(UserService) private _userService : IHttpService,
              private _router: Router) {}

  ngOnInit() {
  }
  register(form: any){
    let reg : ISubscription = this._userService.add(form).subscribe((data: Response) =>{
        localStorage.setItem('temp_id',data.json()['user']['id']);
    },
    err => {},
    () => {
      this._router.navigate(['registration','details']);
      localStorage.removeItem('imageName');
      reg.unsubscribe();
    });
  }
}
