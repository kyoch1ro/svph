import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IForm } from 'app/core/contracts/iform';
import { IAlert } from 'app/core/contracts/ialert';
import { RegistrationValidator } from './registration-validator';

import { RegistrationFormModel } from './registration-form.model';



@Component({
  selector: 'reg-shrd-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements  OnInit, IForm{
  //Asked for an IAlert to be passed
  @Input() set model(val: IAlert){ this._model.next(val); }
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() set pending(val: boolean) { this._pending.next(val); };
  get pending(){ return this._pending.getValue(); }

  private _model = new ReplaySubject<RegistrationFormModel>();
  private _pending = new BehaviorSubject<boolean>(false);

  formModel : RegistrationFormModel;
  form: FormGroup;

  constructor(private _fb: FormBuilder) { }
  
  ngOnInit() {
    this.form = this._fb.group(
      {
        email: ['', Validators.compose([
          Validators.email,
          Validators.required
        ]) ],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
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


    this._model.subscribe(data => {
      this.formModel = new RegistrationFormModel(data);
    })

    this._pending.subscribe(data => {
      if(data) this.formModel.msg = "";
    })
  }

  onSubmit(form: any){
    if (this.form.invalid) {
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
      this.form.get('firstname').markAsTouched();
      this.form.get('lastname').markAsTouched();
      this.form.get('gender').markAsTouched();
      this.form.get('age').markAsTouched();
      return;
    }
    this.formSubmit.emit(form);
  }
}
