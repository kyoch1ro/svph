import { Component, OnInit } from '@angular/core';
import { FeaturedSurvey } from 'app/shared/survey-carousel/f-survey.model';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit, FormComponent {
  
  fSurveys: FeaturedSurvey[] = [];
  form: FormGroup;
  private _surveyService : iSurvey;

  constructor(private modalService: NgbModal, private fb: FormBuilder, srvc: DevSurveyService) {
    this._surveyService = srvc;
   }

  ngOnInit() {
    
    


    this._surveyService.getFeaturedSurveys()
    .map(res => new FeaturedSurvey(res))
    .subscribe(
      res => {
        this.fSurveys.push(res)
      }
    )
    

  }

  hasUnsavedChanges(){
    return this.form.dirty;
  }

  signIn(content){

     this.modalService.open(content,{ size: "lg"});
  }

}
