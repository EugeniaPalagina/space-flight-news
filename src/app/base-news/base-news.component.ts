import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BaseDataService} from '../services/base-data.service';
import {BaseRequestInterface} from '../models/base.request.interface';
import {BaseResponseInterface} from '../models/base.response.interface';
import {BaseNewsInterface} from '../models/base-news.interface';

@Component({
  template: ``
})
export class BaseNewsComponent<T extends BaseNewsInterface> implements OnInit {
  public newsList$!: Observable<T[]>;

  public loading$: Observable<boolean>;

  private newsListInner$ = new BehaviorSubject<T[]>([]);
  private loadingInner$ = new BehaviorSubject(false);

  private readonly STARTED_NEWS_COUNT = 10;


  constructor(protected dataService: BaseDataService<T>) {
    this.newsList$ = this.newsListInner$.asObservable();
    this.loading$ = this.loadingInner$.asObservable();
  }

  ngOnInit(): void {
    this.loadItems({limit: this.STARTED_NEWS_COUNT});
  }

  loadItems(data: BaseRequestInterface): void {
    this.loadingInner$.next(true);
    this.dataService.getNews(data)
      .subscribe((response: BaseResponseInterface<T>) => {
        this.newsListInner$.next(response.results);
        this.loadingInner$.next(false);
      });
  }
}
