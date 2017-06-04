import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { RegistrationValidator } from './registration-validator';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IForm } from './../iform';
import { IAlert } from './../ialert';

@Component({
  selector: 'shrd-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit, IForm, IAlert {
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() 
    set pending(value) {
      this._isSaving.next(value);    
    };
    get pending() {
        return this._isSaving.getValue();
    };

  @Input() msg: string;
  @Input() isSuccess: boolean;




  private _isSaving = new BehaviorSubject<boolean>(false);
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        email: ['', Validators.compose([
          Validators.email,
          Validators.required
        ]) ],
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        gender: ['', Validators.required],
        age: ['', Validators.compose([
          Validators.required
        ])],
        password: ['',Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        confirmPassword: ['',Validators.required]
      }, { validator: RegistrationValidator.matchPassword }
    )
  }

  onSubmit(form: any){
    if (this.form.invalid) {
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
      this.form.get('name').markAsTouched();
      return;
    }
    this.formSubmit.emit(form);
  }

}



