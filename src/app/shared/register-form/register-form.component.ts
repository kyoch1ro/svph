import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';

         
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})




export class RegisterFormComponent implements OnInit {
  @Output() register : EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        email: ['', Validators.compose([
          Validators.email,
          Validators.required
        ]) ],
        password: ['',Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        name: ['', Validators.required],
        confirmPassword: ['',Validators.required]
      }
    )
  }



  onSubmit(form: any){
    this.register.emit(form);
  }

}
