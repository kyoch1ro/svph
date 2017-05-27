import { Observable } from 'rxjs/Observable';
import { IUserModel } from './iuser.model';

export interface IUserService{
    registerUser(newUser: IUserModel): Observable<any>;
    login(email : string, password: string) :Observable<any>;
}