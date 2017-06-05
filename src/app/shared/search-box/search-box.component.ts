import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ISubscription } from "rxjs/Subscription";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';//flatMap



@Component({
  selector: 'shrd-search',
  template: `
  <form [formGroup]="form">
      <div class="input-group">
          <input type="text" class="form-control"  formControlName="search"  [formGroup]="form" placeholder="Search">
          <span class="input-group-btn">
            <button class="btn btn-secondary" [disabled]="pending" type="button">
              <i class="fa fa-search" aria-hidden="true" [hidden]="pending" ></i>
              <i class="fa fa-spinner  fa-spin" [hidden]="!pending" aria-hidden="true"></i>
            </button>
          </span>
      </div>
    </form>`
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  

  @Output() query: EventEmitter<string> = new EventEmitter();
  @Input() 
  set pending(value) {
    this._isLoading.next(value);
  };
  get pending() {
      return this._isLoading.getValue();
  };


  private _searchBoxSubscription: ISubscription;

  form: FormGroup;
  private _isLoading = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: []
    })
    
    var search = this.form.get('search');
    this._searchBoxSubscription = search.valueChanges
                                  .filter(text => text.length >= 3)
                                  .debounceTime(400)
                                  .subscribe(data => this.query.emit(data));
  }

  ngOnDestroy(){
    this._searchBoxSubscription.unsubscribe();
  }
}
