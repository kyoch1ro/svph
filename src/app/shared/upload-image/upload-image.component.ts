import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { IForm } from 'app/core/contracts/iform';
import { IAlert } from 'app/core/contracts/ialert';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'shrd-upload-image',
  templateUrl: './upload-image.component.html',



  
})
export class UploadImageComponent implements OnInit, IForm, IAlert {
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() 
  set pending(value) {
    this._isLoading.next(value);
    if(value) this._msg.next('');
  };
  get pending() { return this._isLoading.getValue(); };

  @Input() 
  set msg(value){ this._msg.next(value); };
  get msg(){ return this._msg.getValue(); };

  @Input()
  set isSuccess(value){ this._isSuccess.next(value); };
  get isSuccess(){ return this._isSuccess.getValue(); };

  private _isLoading = new BehaviorSubject<boolean>(false);
  private _msg = new BehaviorSubject<string>('');
  private _isSuccess = new BehaviorSubject<boolean>(false);

  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.formSubmit.emit(file);
    }
  }
}
