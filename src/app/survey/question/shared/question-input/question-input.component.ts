import { Component, OnInit, Input } from '@angular/core';
import { Question }  from 'app/survey/question/question.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Radio } from 'app/shared/radio-input/radio.model';
import { IOptionDTO } from 'app/survey/question/options/ioption';

@Component({
  selector: 'opt-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.css']
})
export class QuestionInputComponent implements OnInit {
  private _question = new BehaviorSubject<Question>(new Question());
  @Input() 
  set question(val : Question){
    this._question.next(val)
  };
  get question(){
    return this._question.getValue();
  }
  constructor() { }
  ngOnInit() {
  }



  questionToIMultiInput(val : IOptionDTO){
    return new Radio(val.question_id,val.option_caption,val.option_id);
    
  }

}
