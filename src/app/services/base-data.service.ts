import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseRequestInterface} from '../models/base.request.interface';
import {BaseResponseInterface} from '../models/base.response.interface';
import {ArticlesResponseInterface} from '../models/articles/articles.response.interface';
import {BaseDataAbstractService} from './base-data.abstract.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDataService<T> extends BaseDataAbstractService<T>{
  protected apiUrl = 'https://api.spaceflightnewsapi.net/v4';

  protected orderingByLastTime = ['-published_at', '-updated_at'];

  protected abstract endpoint: string;

  constructor(protected http: HttpClient) {
    super();
  }

  getNews(data: BaseRequestInterface): Observable<BaseResponseInterface<T>> {
    data.ordering = this.orderingByLastTime;
    const url = this.apiUrl + `/${this.endpoint}`;
    return this.http.get<BaseResponseInterface<T>>(url, {params: {...data}});
  }

  getNewsById(id: number): Observable<T> {
    const url = this.apiUrl + `/${this.endpoint}${id}`;
    return this.http.get<T>(this.apiUrl + url);
  }
}
