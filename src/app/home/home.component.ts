import { Component, OnInit } from '@angular/core';
import { FormGroup, 
         FormBuilder, 
         Validators, 
         FormControl} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from 'app/core/form-component.interface';
import { iSurvey  } from 'app/survey/i-survey.interface';
import { DevSurveyService  } from 'app/survey/dev-survey.service';
import { Survey } from 'app/survey/survey.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit, FormComponent {
  surveys: Survey[] = [];
  form: FormGroup;
  question: string;
  testDex: number;
  activeIndx = new Subject<number>();

  private _surveyService : iSurvey;

  constructor(private modalService: NgbModal, private fb: FormBuilder, srvc: DevSurveyService) {
    this._surveyService = srvc;
   }

  ngOnInit() {
    this._surveyService.getFeaturedSurveys()
    .subscribe(
      res => {
        this.surveys.push(res)
      },
      error => {
      },
      () => {
        this.activeIndx.next(0);
      }
    )



    this.activeIndx.subscribe(
      x => {
        this.question = this.surveys[x].question_caption;
        this.testDex = x;
      }
    )
    
  }

  

  setData(x){
      this.activeIndx.next(x);
  }



  hasUnsavedChanges(){
    return this.form.dirty;
  }

  signIn(content){
     this.modalService.open(content,{ size: "lg"});
  }

}
