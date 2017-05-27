import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { LoginValidator } from './login-validator';
import { Observable }  from 'rxjs/Observable';

@Component({
  selector: 'shrd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() login : EventEmitter<any> = new EventEmitter();
  @Input() isLoading : boolean = false;
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
    this.login.emit(form);
  }
}
