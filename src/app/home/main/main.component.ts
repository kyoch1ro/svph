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
import { ISubscription } from "rxjs/Subscription";
import { Router }  from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _surveySrvc : ISurveyService;
  private _userSrvc: IUserService;
  private _authService: iAuth;
  private _modalRef: any;
  public _subscription :ISubscription;
  closeResult: string;
  public surveys: ISurveyModel[];
  



  //Subscription
  public surveySubscription: Observable<any>;
  public authSubscription: Observable<any>;


  //Login
  public loginMsg: string;
  public isSigningIn: boolean = false;
  public loginIsSuccess: boolean;


  //Registration
  public registrationMsg: string;
  public registrationIsSuccess: boolean;
  public isSaving : boolean = false;



  //refactor this code to featured component
  public activeSurveyIndx = new BehaviorSubject<number>(0);
  public activeQuestion: string;
  public activeRespondents : number;
  public activeId: number;
  



  errorMsg: string;
  constructor(surveySrvc : SurveyService,
              authService: AuthService, 
              userService: UserService, 
              private modalService: NgbModal,
              private router: Router) {
    this._surveySrvc = surveySrvc;
    this._authService = authService;
    this._userSrvc = userService;
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
    this._modalRef = this.modalService.open(content,{
                        size: 'lg'
                      });
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
    this.isSaving = true;
    this._subscription = this._userSrvc.registerUser(form)
                        .subscribe(
                          data => {
                            this.registrationMsg = "Registration success.";
                            this.registrationIsSuccess = true;
                            
                          },
                          err => {
                            this.registrationMsg = 'Please try again later.';
                            this.registrationIsSuccess = false;
                          },
                          () => {
                            this.isSaving = false;
                            this._subscription.unsubscribe();
                          });
  }

  loginUser(form: any){
    this.isSigningIn = true;
    this._subscription = this._authService.login(form['email'],form['password'])
                        .subscribe(
                          data => {
                            if(!data['token']){
                              console.log('Token not provided!');
                              return;
                            } 
                            this._modalRef.close();
                            localStorage.setItem('token',data['token']);
                            this.router.navigate(['surveys']);
                          },
                          err => {
                            this.loginIsSuccess = false;
                            this.isSigningIn = false;
                            if(err['status'] == 422){
                              this.loginMsg = err.json().email[0];
                              return;
                            }
                            this.loginMsg = 'Invalid username or password';
                          },
                          () => {
                            this._subscription.unsubscribe();
                          }
                        )
  }
}
