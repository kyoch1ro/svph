import { AbstractControl , FormControl } from '@angular/forms';

export class RegistrationValidator {

    static matchPassword(form: AbstractControl){
        let newpwd = form.get('password').value;
        let conpwd = form.get('confirmPassword').value;
        if(newpwd != conpwd){
            form.get('confirmPassword').setErrors({ matchPassword: true });
            return;
        }
        return null;
    }
}
