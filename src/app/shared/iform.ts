import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface IForm {
    form : FormGroup;
    formSubmit : EventEmitter<any>;
    pending : boolean;
    onSubmit(form: any);
}

