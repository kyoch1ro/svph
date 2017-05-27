import { Injectable } from '@angular/core';
import { iAuth } from './i-auth.service';

@Injectable()
export class AuthService {
    login(user: string, password: string): boolean{
        return false;
    };
    logout(): void{
        return;
    };
    getUser(): string{
        return 'false';
    };
    isLoggedIn(): boolean{
        return false;
    };
}