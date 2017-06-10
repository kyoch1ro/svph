import { IAlert } from 'app/core/contracts/ialert';

export class RegistrationFormModel implements IAlert{
    msg: string;
    isSuccess: boolean;

    constructor(obj? :any){
        this.msg = obj && obj.msg || null;
        this.isSuccess = obj && obj.isSuccess || null;
    }
}