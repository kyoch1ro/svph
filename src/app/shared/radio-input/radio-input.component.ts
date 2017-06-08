import { Component, OnInit, Input } from '@angular/core';
import { Radio } from './radio.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'shrd-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {
  @Input()
  set radio(val : Radio){
    this._radio.next(val)
  }
  get radio(){
    return this._radio.getValue();
  }

  private _radio : BehaviorSubject<Radio> = new BehaviorSubject<Radio>(new Radio());
  constructor() { }

  ngOnInit() {
  }

}
