import { IHttpService } from './ihttp-service';
import { Observable } from 'rxjs/Observable';



export interface IUploadable extends IHttpService{
    upload(form: any): Observable<any>;
}
