import { Observable } from 'rxjs/Observable';

export interface IFeaturable{
    getFeaturedList(): Observable<any>;
}