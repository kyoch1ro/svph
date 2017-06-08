import { Component, OnInit, Input } from '@angular/core';
import { Check } from './check.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'shrd-check-input',
  templateUrl: './check-input.component.html',
  styleUrls: ['./check-input.component.css']
})
export class CheckInputComponent implements OnInit {
  @Input()
  set check(val: Check){
    this._check.next(val);
  }
  get check(){
    return this._check.getValue();
  }
  private _check : BehaviorSubject<Check> = new BehaviorSubject<Check>(new Check());
  constructor() { }

  ngOnInit() {
  }

}
