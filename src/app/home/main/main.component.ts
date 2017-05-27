import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISurveyService } from 'app/survey/isurvey.service';
import { DevSurveyService } from 'app/survey/shared/dev-survey.service';
import { ISurveyModel } from 'app/survey/isurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { DevUserService } from 'app/user/shared/dev-user.service';
import { IUserService } from 'app/user/iuser.service';


import { DevAuthService } from 'app/core/dev-auth.service';
import { iAuth } from 'app/core/i-auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : ISurveyService;
  private _userSrvc: IUserService;
  private _authService: iAuth;

  public surveySubscription: Observable<any>;
  public authSubscription: Observable<any>;


  public activeSurveyIndx = new Subject<number>();
  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;
  

  errorMsg: string;
  surveys: ISurveyModel[];
  isSaving = new Subject<boolean>();
  

  constructor(surveySrvc : DevSurveyService,userSrvc: DevUserService,private modalService: NgbModal, authService: DevAuthService) {
    this._surveySrvc = surveySrvc;
    this._userSrvc = userSrvc;
    this._authService = authService;
   }

  ngOnInit() {
    //initialize subscriptions
    this.surveySubscription = this._surveySrvc.getFeaturedSurveys();
    this.authSubscription = this._authService.isLoggedIn;
    
    //load functions
    this.loadFeaturedSurveys();
    this.watchForErrorMsg();
    this.setIsSaving(false);
    this.watchForNewIndx();
  }
  

  watchForNewIndx(){
    this.activeSurveyIndx.subscribe(
      indx => {
        this.activeQuestion = this.surveys[indx].question_caption;
        this.activeRespondents = Number(this.surveys[indx].respondents);
        this.activeId = Number(this.surveys[indx].id);
      }
    )
  }

  setIsSaving(val){
    this.isSaving.next(val);
  }

  watchForErrorMsg(){
    this.authSubscription.subscribe(
      data=>
      {
        if(!data){
          this.errorMsg = "Username or password was incorrect."
          setTimeout(function(){
            this.errorMsg =""
          }.bind(this),3000);
        }
      }
    );
  }

  showSignInModal(content){
    this.modalService.open(content,{
      size: 'lg'
    });
  }

  loadFeaturedSurveys(){
    this.surveySubscription
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
    this.setIsSaving(true);
    this._userSrvc.registerUser(form).subscribe(
      data => {},
      err => this.errorMsg = <any> err,
      () =>  this.setIsSaving(false)
    )
  }

  loginUser(form: any){
    this._authService.login(form['email'],form['password']);
    // console.log(form);
  }
}
