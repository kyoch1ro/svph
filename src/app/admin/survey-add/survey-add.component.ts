import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from 'app/survey/category/category.service';
import { TypeService } from 'app/survey/type/type.service';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { iAuth  } from 'app/core/services/i-auth.service';
import { AuthService  } from 'app/core/services/auth.service';
import { ICategoryModel } from 'app/survey/category/icategory-model';
import { ITypeModel }  from 'app/survey/type/itype-model';
import { ISubscription } from 'rxjs/Subscription';
import { SurveyService } from 'app/survey/survey.service';
@Component({
  selector: 'admn-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent implements OnInit {

  categories: ICategoryModel[];
  types: ITypeModel[];
  private _categorySubscription: ISubscription;
  private _typeSubscription: ISubscription;
  private _surveySubscription: ISubscription;


  //move to model
  isSaving: boolean = false;
  msg: string = '';
  isSuccess: boolean = false;


  constructor(@Inject(CategoryService) private _categoryService: IHttpService,
              @Inject(TypeService) private _typeService: IHttpService,
              @Inject(SurveyService) private _surveyService: IHttpService,
              @Inject(AuthService) private _authService: iAuth) { }

  ngOnInit() {
    this._categorySubscription = 
      this._categoryService.list().subscribe(
          data => this.categories = <ICategoryModel[]>data['category'],
          err => console.log(err),
          () => this._categorySubscription.unsubscribe()
      );
    
    this._typeSubscription =
      this._typeService.list().subscribe(
        data => this.types = <ITypeModel[]> data['type'],
        err => console.log(err),
        () => this._typeSubscription.unsubscribe()
      )
  }

  save(form: any){
    this.isSaving = true;
    this._surveySubscription = 
      this._surveyService.add(form)
      .subscribe(
        data => {
          this.msg = "Survey Successfully Added.";
          this.isSuccess = true;
          // console.log(data)
        },
        err => {
          this.msg = "Please try again later.";
          this.isSuccess = false;
        },
        ()=>{
          this.isSaving = false;
          this._surveySubscription.unsubscribe();
        }
      );
  }

}
