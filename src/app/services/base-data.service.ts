import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseNewsRequestInterface} from '../models/base-news.request.interface';
import {BaseNewsResponseInterface} from '../models/base-news.response.interface';
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

  getNews(data: BaseNewsRequestInterface): Observable<BaseNewsResponseInterface<T>> {
    data.ordering = this.orderingByLastTime;
    const url = this.apiUrl + `/${this.endpoint}`;
    return this.http.get<BaseNewsResponseInterface<T>>(url, {params: {...data}});
  }

  getNewsById(id: number): Observable<T> {
    const url = this.apiUrl + `/${this.endpoint}${id}`;
    return this.http.get<T>(this.apiUrl + url);
  }
}
