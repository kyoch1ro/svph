import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AbstractControl,
         FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IForm } from 'app/core/contracts/iform';
import { IAlert } from 'app/core/contracts/ialert';
import { DetailsFormModel } from './details-form.model';

@Component({
  selector: 'reg-shrd-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit, IForm {
  //Asked for an IAlert to be passed
  @Input() set model(val: IAlert){ this._model.next(val); }
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() set pending(val: boolean) { this._pending.next(val); };
  get pending(){ return this._pending.getValue(); }

  private _model = new ReplaySubject<DetailsFormModel>();
  private _pending = new BehaviorSubject<boolean>(false)
  year_range: number[] = [];
  active = 0;
  formModel : DetailsFormModel;
  form: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group(
      {
        no_of_children: [0,Validators.required],
        college: [false],
        c_school: [{value: '', disabled: true}],
        c_year_grad: [{value: '', disabled: true}],
        secondary: [false],
        s_school:[{value: '', disabled: true}],
        s_year_grad:[{value: '', disabled: true}],
        elementary: [false],
        e_school: [{value: '', disabled: true}],
        e_year_grad: [{value: '', disabled: true}],
        religion: ['',Validators.required],
        residential_status: ['', Validators.required],
        car_owner: [false],
        no_of_cars: [{value: '', disabled: true}]
      }
    )


    let d = new Date();
    for (var index = d.getFullYear(); index > 1980 ; index--) {
      this.year_range.push(index);
    }


    this._model.subscribe(data => {
      this.formModel = new DetailsFormModel(data);
    })

    this._pending.subscribe(data => {
      if(data) this.formModel.msg = "";
    })
  }

  removeDisable(event,field_name: string[]){
    // console.log(event.target.value);
    if(event.target.checked){
      field_name.forEach(data => {
        this.form.get(data).setValidators(Validators.required);
        this.form.get(data).updateValueAndValidity();
        this.form.get(data).enable();    
      })
      return;
    }


    field_name.forEach(data => {
      this.form.get(data).setValue('');
      this.form.get(data).setValidators(null);
      this.form.get(data).updateValueAndValidity()
      this.form.get(data).disable();    
    })
    
    
  }
  onSubmit(form: any){
    DetailsFormComponent.markAllTouched(this.form);
    if(!this.form.valid){
      this.formModel.msg ="Cannot save data, please verify all fields and try again.";
      return;
    }
    this.formSubmit.emit(form);
  }

  static markAllTouched(control: AbstractControl) {
      if(control.hasOwnProperty('controls')) {
          control.markAsTouched(true) // mark group
          let ctrl = <any>control;
          for (let inner in ctrl.controls) {
              this.markAllTouched(ctrl.controls[inner] as AbstractControl);
          }
      }
      else {
          (<FormControl>(control)).markAsTouched(true);
      }
  }

  next(){
    this.active += 1;
  }
  prev(){
    if((this.active - 1) < 0) return;
    this.active -= 1;
  }
}
