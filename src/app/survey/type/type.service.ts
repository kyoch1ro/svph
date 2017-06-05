import { Injectable, Inject } from '@angular/core';
import { ITypeModel } from './itype-model';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service';
import { iAuth } from 'app/core/services/i-auth.service';
import { apiUrl } from 'app/core/global.const';

@Injectable()
export class TypeService implements IHttpService {
  private _url: string = apiUrl;

  constructor(private _http: Http, @Inject(AuthService) private _authService : iAuth) { }

    getById(id: number): ITypeModel{
      return;
    };

  list(): any{
    const user = (this._authService.isAdmin()) ? 'admin/' : '';
    const token = this._authService.getToken();
    return this._http.get(`${this._url}/${user}type?token=${token}`)
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


export const TYPE_PROVIDERS: Array<any>=[
  { provide: TypeService ,useClass: TypeService }
]
