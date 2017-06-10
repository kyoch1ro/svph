import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationFormModel } from './../shared/registration-form/registration-form.model';
import { IAlert } from 'app/core/contracts/ialert';
import { IUserHttpService } from 'app/core/contracts/ihttp-service';
import { UserService } from 'app/user/user.service';
import { Router }  from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'reg-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsModel: IAlert = { msg: '', isSuccess: false};
  pending: false;

  constructor(@Inject(UserService) private _userService : IUserHttpService,
              private _router: Router) { }

  ngOnInit() {
  }


  save(data: any){
    let subs: ISubscription = this._userService.saveOtherDetails(data)
    .subscribe(data => console.log(data.json()),
               err => {},
               () => {
                 subs.unsubscribe();
               });
  }
}
