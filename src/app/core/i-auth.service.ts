import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export interface iAuth{
    login(user: string, password: string);
    logout(): void;
    getUser(): string;
    isLoggedIn: Subject<boolean>;
}