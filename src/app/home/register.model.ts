import { ISubscription } from "rxjs/Subscription";
import { Router }  from '@angular/router';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { IUserService } from 'app/user/iuser.service';
import { LoginModel } from './login.model';


export class RegisterModel{
    private _subscription: ISubscription;
    public registrationMsg: string;
    public registrationIsSuccess: boolean;
    public isSaving : boolean = false;

    constructor(private _userSrvc: IHttpService, private _login: LoginModel){
    }

    registerUser(form: any){
        this.isSaving = true;
        this._subscription = this._userSrvc.add(form)
                        .subscribe(
                          data => {
                            this.registrationMsg = "Redirecting...";
                            this.registrationIsSuccess = true;
                          },
                          err => {
                            this.registrationMsg = 'Please try again later.';
                            this.registrationIsSuccess = false;
                            this.isSaving = false;
                          },
                          () => {
                            this._login.login(form);
                            this._subscription.unsubscribe();
                          });
    }
}