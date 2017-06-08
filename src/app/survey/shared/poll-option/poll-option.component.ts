import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IOptionDTO }  from 'app/survey/question/options/ioption';


@Component({
  selector: 'srvy-poll-option',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.css']
})
export class PollOptionComponent implements OnInit {
  @Output() formSubmit : EventEmitter<any> = new EventEmitter();
  @Input() options: IOptionDTO[];
  @Input() 
  set pending(value) {
    this._isLoading.next(value);
    if(value) this._msg.next('');
  };
  get pending() {
      return this._isLoading.getValue();
  };
  @Input()
  set isSuccess(value){
    this._isSuccess.next(value);
  };
  get isSuccess(){
    return this._isSuccess.getValue();
  }

  poll: any;


  private _isLoading = new BehaviorSubject<boolean>(false);
  private _msg = new BehaviorSubject<string>('');
  private _isSuccess = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }



  onSubmit(form: any){
    this.formSubmit.emit(form['option']);
  }
}
