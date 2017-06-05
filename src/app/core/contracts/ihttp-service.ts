import { Observable } from 'rxjs/Observable';


export interface IHttpService{
  getById(id: number): any;
  list(): any;
  add(data: any): Observable<any>;
  delete(id: number): Observable<any>;
  update(id: number): Observable<any>;
  count(): Observable<any>;
}