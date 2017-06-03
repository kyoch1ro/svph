import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISurveyService } from 'app/survey/isurvey.service';
import { DevSurveyService, SurveyService } from 'app/survey/survey.service';
import { ISurveyModel } from 'app/survey/isurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { IUserService } from 'app/user/iuser.service';

import { DevUserService, UserService } from 'app/user/user.service';

import { DevAuthService,AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : ISurveyService;
  private _userSrvc: IUserService;
  private _authService: iAuth;
  public surveys: ISurveyModel[];

  //Subscription
  public surveySubscription: Observable<any>;
  public authSubscription: Observable<any>;


  //Login
  public errLogin: string;



  //Registration
  public errRegister: string;
  public isSaving : boolean = false;



  //refactor this code to featured component
  public activeSurveyIndx = new BehaviorSubject<number>(0);
  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;
  



  errorMsg: string;
  
  


  

  constructor(surveySrvc : SurveyService,authService: AuthService, userService: UserService, private modalService: NgbModal) {
    this._surveySrvc = surveySrvc;
    this._authService = authService;
    this._userSrvc = userService;
   }

  ngOnInit() {
    //initialize subscriptions
    this.surveySubscription = this._surveySrvc.getFeaturedSurveys();

    //added unsubscribe
    this.loadFeaturedSurveys();
    // this.setIsSaving(false);

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

  // setIsSaving(val){
  //   this.isSaving.next(val);
  // }

  showSignInModal(content){
    this.modalService.open(content,{
      size: 'lg'
    });
  }

  loadFeaturedSurveys(){
    this.surveySubscription
    .subscribe(
      res => {
        this.surveys = res;
      },
      err => this.errorMsg = <any> err,
      () => this.watchForNewIndx()
    )
  }

  updateIndx(val){
    this.activeSurveyIndx.next(val);
  }

  registerUser(form: any){
    // console.log(form);
    this.isSaving = true;






    // this.setIsSaving(true);
    // this._userSrvc.registerUser(form).subscribe(
    //   data => {},
    //   err => this.errorMsg = <any> err,
    //   () =>  this.setIsSaving(false)
    // )
  }

  loginUser(form: any){
    console.log(form);
    // this._authService.login(form['email'],form['password']);
    // if(!this._authService.isLoggedIn()){
    //   this.errorMsg = "Username or password was incorrect."
    //   console.log(this.errorMsg);
    //   setTimeout(function(){
    //     this.errorMsg ="";
    //   }.bind(this),3000);
    // }
  }
}
