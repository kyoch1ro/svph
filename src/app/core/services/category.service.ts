import { Injectable } from '@angular/core';
import { ICategoryModel } from 'app/core/contracts/icategory-model';
import { IHttpService } from 'app/core/contracts/ihttp-service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CategoryService implements IHttpService {

  constructor() { }

  getById(id: number): any{
    return;
  };
  list(): any{
    return;
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

