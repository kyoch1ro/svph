import { Observable } from 'rxjs/Observable';
import { IHttpService } from './ihttp-service';
export interface IChild extends IHttpService{
    getByParentId(id: number): Observable<any>;
}