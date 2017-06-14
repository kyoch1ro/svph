import { Injectable, Inject } from '@angular/core';
import { ICategoryModel } from './icategory-model';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';
import { apiUrl } from 'app/core/global.const';

@Injectable()
export class CategoryService implements IHttpService {
  private _url: string = apiUrl;
  
  constructor(private _http: Http, @Inject(AuthService) private _authService : iAuth ) { }

  getById(id: number): any{
    return;
  };


  list(): any{
    const user = (this._authService.isAdmin()) ? 'admin/' : '';
    const token = this._authService.getToken();
    return this._http.get(`${this._url}/${user}category?token=${token || ''}`)
           .map((res: Response) => res.json());
  };



  add(data: any): Observable<any>{
    return;
  };
  delete(id: number): Observable<any>{
    return;
  };
  update(id: number): Observable<any>{
    return;
  };

  count(): Observable<number>{
    return;
  }
}

export const CATEGORY_PROVIDERS: Array<any>=[
  { provide: CategoryService ,useClass: CategoryService }
]
