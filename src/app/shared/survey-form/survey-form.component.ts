import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IForm } from './../iform';
import { IAlert } from './../ialert';
import { CategoryService } from 'app/survey/category/category.service';
import { ICategoryModel } from 'app/survey/category/icategory-model';
import { ITypeModel } from 'app/survey/type/itype-model';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'shrd-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit, IForm, IAlert {
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() categories: ICategoryModel[];
  @Input() types: ITypeModel[];

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
  private _categorySubscription: ISubscription;
  form: FormGroup;
  constructor(private fb: FormBuilder,
              @Inject(CategoryService) private _categoryService : IHttpService) { }

  ngOnInit() {
    this.form = this.fb.group({
      question_category_id: ['', Validators.required],
      question_type_id: ['', Validators.required],
      question_caption:['',Validators.required]
    })
  }

  onSubmit(form: any){
    if (this.form.invalid) {
      this.form.get('question_category_id').markAsTouched();
      this.form.get('question_type_id').markAsTouched();
      this.form.get('question_caption').markAsTouched();
      return;
    }
    this.formSubmit.emit(form);
  }

}
