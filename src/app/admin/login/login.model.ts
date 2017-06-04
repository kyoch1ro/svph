import { iAuth } from 'app/core/services/i-auth.service';
import { ISubscription } from "rxjs/Subscription";
import { Router }  from '@angular/router';
import { ILogin } from 'app/core/contracts/ILogin';


export class LoginModel implements ILogin{
    private _subscription: ISubscription;
    public loginMsg: string;
    public isSigningIn: boolean = false;
    public loginIsSuccess: boolean;

    constructor(private _authService: iAuth,private router: Router){}

    login(form: any){
        this.isSigningIn = true;
        this._subscription = this._authService.login(form['email'],form['password'],true)
                            .subscribe(
                            data => {
                                if(!data['token']){
                                    console.log('Token not provided!');
                                    return;
                                }

                                localStorage.setItem('token',data['token']);
                                localStorage.setItem('accType','admin');
                                this.router.navigate(['admin']);
                            },
                            err => {
                                this.loginIsSuccess = false;
                                this.isSigningIn = false;
                                if(err['status'] == 422){
                                this.loginMsg = err.json().email[0];
                                return;
                                }
                                this.loginMsg = 'Invalid username or password';
                            },
                            () => {
                                this._subscription.unsubscribe();
                            }
                            )
    }
}