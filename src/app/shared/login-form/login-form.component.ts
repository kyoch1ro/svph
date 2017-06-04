import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { LoginValidator } from './login-validator';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IForm } from './../iform';
import { IAlert } from './../ialert';


@Component({
  selector: 'shrd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, IForm, IAlert {
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
 
  @Input() 
  set pending(value) {
    this._isLoading.next(value);
    if(value) this._msg.next('');
  };
  get pending() {
      return this._isLoading.getValue();
  };

  @Input() 
    set msg(value){
      this._msg.next(value);
    };
    get msg(){
      return this._msg.getValue();
    }


  @Input()
    set isSuccess(value){
      this._isSuccess.next(value);
    };
    get isSuccess(){
      return this._isSuccess.getValue();
    }


  private _isLoading = new BehaviorSubject<boolean>(false);
  private _msg = new BehaviorSubject<string>('');
  private _isSuccess = new BehaviorSubject<boolean>(false);
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.compose([
         Validators.required,
         Validators.email
      ])],
      password: ['', Validators.required]
    })
  }


  onSubmit(form: any){
    // console.log(form);
    if(this.form.invalid){
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
      return;
    }
    // console.log(form);
    this.formSubmit.emit(form);
  }
}
