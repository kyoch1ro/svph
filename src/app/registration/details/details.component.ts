import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationFormModel } from './../shared/registration-form/registration-form.model';
import { IAlert } from 'app/core/contracts/ialert';
import { IUserHttpService, IHttpService } from 'app/core/contracts/ihttp-service';
import { UserService } from 'app/user/user.service';
import { Router }  from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { CategoryService } from 'app/survey/category/category.service';
@Component({
  selector: 'reg-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsModel: IAlert = { msg: '', isSuccess: false};
  pending: false;
  categories: any[];

  registered: boolean = false;

  constructor(@Inject(UserService) private _userService : IUserHttpService,
              @Inject(CategoryService) private _categoryService: IHttpService,
              private _router: Router) { }

  ngOnInit() {
    let cat_sub: ISubscription = this._categoryService.list()
    .subscribe(
      data => this.categories = data['category'],
      err => {},
      () => cat_sub.unsubscribe()
    )
  }


  save(data: any){
    // newUser['govt_id'] = localStorage.getItem('imageName');
    data['govt_id'] = localStorage.getItem('imageName');
    console.log(data);
    let subs: ISubscription = this._userService.registerUser(data)
    .subscribe(data => {},
               err => {},
               () => {
                 this.registered = true;
                 subs.unsubscribe();
               });
  }
}
