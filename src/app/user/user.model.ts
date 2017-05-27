import { IUserModel } from './iuser.model';

export class User implements IUserModel{
    id: number;
    name: string;
    email: string;
    password: string;
    remember_token: string;
    created_at: string;
    updated_at: string;


    constructor(obj? : any){
        this.id = obj && obj.id;
        this.name = obj && obj.name;
        this.email = obj && obj.email;
        this.password = obj && obj.password;
        this.remember_token = obj && obj.remember_token;
        this.created_at = obj && obj.created_at;
        this.updated_at = obj && obj.updated_at;
    }
}