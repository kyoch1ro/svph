import { Component, OnInit } from '@angular/core';
import { ISurveyService } from 'app/survey/isurvey.service';
import { DevSurveyService } from 'app/survey/shared/dev-survey.service';
import { ISurveyModel } from 'app/survey/isurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { DevUserService } from 'app/user/shared/dev-user.service';
import { IUserService } from 'app/user/iuser.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : ISurveyService;
  private _userSrvc: IUserService;

  public subscription: Observable<any>;
  public activeSurveyIndx = new Subject<number>();
  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;
  

  errorMsg: string;
  surveys: ISurveyModel[];
  isSaving = new Subject<boolean>();
  constructor(surveySrvc : DevSurveyService,userSrvc: DevUserService,private modalService: NgbModal) {
    this._surveySrvc = surveySrvc;
    this._userSrvc = userSrvc;
   }

  ngOnInit() {
    this.loadFeaturedSurveys();
    this.isSaving.next(false);

    this.activeSurveyIndx.subscribe(
      indx => {
        this.activeQuestion = this.surveys[indx].question_caption;
        this.activeRespondents = Number(this.surveys[indx].respondents);
        this.activeId = Number(this.surveys[indx].id);
      }
    )
  }

  showSignInModal(content){
    this.modalService.open(content,{
      size: 'lg'
    });
  }

  loadFeaturedSurveys(){
    this.subscription = this._surveySrvc.getFeaturedSurveys();
    this.subscription
    .subscribe(
      res => this.surveys = res,
      err => this.errorMsg = <any> err,
      () => this.activeSurveyIndx.next(0)
    )
  }

  updateIndx(val){
    this.activeSurveyIndx.next(val);
  }


  registerUser(form: any){
    this.isSaving.next(true);
    this._userSrvc.registerUser(form).subscribe(
      data => {},
      err => this.errorMsg = <any> err,
      () =>  this.isSaving.next(false)
    )
  }
}
