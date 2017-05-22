import { IUserModel } from './iuser.model';

export class User implements IUserModel{
    id: number;
    name: string;
    email: string;
    password: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
}