import {Observable} from 'rxjs';
import {BaseRequestInterface} from '../models/base.request.interface';
import {BaseResponseInterface} from '../models/base.response.interface';

export abstract class BaseDataAbstractService<T> {
  public abstract getNews(data: BaseRequestInterface): Observable<BaseResponseInterface<T>> ;

  public abstract getNewsById(id: number): Observable<T>;
}
