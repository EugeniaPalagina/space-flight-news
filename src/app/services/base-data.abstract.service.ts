import {Observable} from 'rxjs';
import {BaseNewsRequestInterface} from '../models/base-news.request.interface';
import {BaseNewsResponseInterface} from '../models/base-news.response.interface';

export abstract class BaseDataAbstractService<T> {
  public abstract getNews(data: BaseNewsRequestInterface): Observable<BaseNewsResponseInterface<T>> ;

  public abstract getNewsById(id: number): Observable<T>;
}
