import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISurveyService } from 'app/core/contracts/ISurvey.service';
import { DevSurveyService, SurveyService } from 'app/survey/survey.service';
import { ISurveyModel } from 'app/core/contracts/ISurvey.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { IUserService } from 'app/user/iuser.service';
import { UserService } from 'app/user/user.service';
import { AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';
import { ISubscription } from "rxjs/Subscription";
import { Router }  from '@angular/router';

import { LoginModel } from './login.model';
import { RegisterModel } from './register.model';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  private _surveySrvc : ISurveyService;
  private _userSrvc: IUserService;
  private _authService: iAuth;
  private _modalRef: any;
  public _subscription :ISubscription;
  public surveys: ISurveyModel[];
  
  //move to ISubscription
  public surveySubscription: Observable<any>;
  public authSubscription: Observable<any>;






  public loginModel : LoginModel;
  public registerModel: RegisterModel;

  //refactor this code to featured component
  public activeSurveyIndx = new BehaviorSubject<number>(0);
  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;
  



  errorMsg: string;
  constructor(surveySrvc : SurveyService,
              authService: AuthService, 
              userService: UserService, 
              router: Router,
              private modalService: NgbModal) {
    this._surveySrvc = surveySrvc;
    this._authService = authService;
    this._userSrvc = userService;
    this.loginModel = new LoginModel(authService,router);
    this.registerModel = new RegisterModel(userService, this.loginModel);
   }

  ngOnInit() {
    this.surveySubscription = this._surveySrvc.getFeaturedSurveys();
    this.loadFeaturedSurveys();
  }
  

  watchForNewIndx(){
    this.activeSurveyIndx.subscribe(
      indx => {
        this.activeQuestion = this.surveys[indx].question_caption;
        this.activeRespondents = Number(this.surveys[indx].respondents);
        this.activeId = Number(this.surveys[indx].question_id);
      }
    )
  }

  showSignInModal(content){
    this._modalRef = this.modalService.open(content,{ size: 'lg' });
  }

  loadFeaturedSurveys(){
    this._subscription = this.surveySubscription
                        .subscribe(
                          res => {
                            this.surveys = res['featured'];
                          },
                          err => this.errorMsg = <any> err,
                          () => {
                            this.watchForNewIndx(),
                            this._subscription.unsubscribe()
                          } 
                        )
  }

  updateIndx(val){
    this.activeSurveyIndx.next(val);
  }

  registerUser(form: any){
    // console.log(form);
    this.registerModel.registerUser(form);
    console.log(this.registerModel.registrationIsSuccess);
  }

  loginUser(form: any){
    this.loginModel.login(form);
  }


  private _closeModal(){
    if(this._modalRef) this._modalRef.close();
  } 

  ngOnDestroy(){
     this._closeModal();
  }
}
