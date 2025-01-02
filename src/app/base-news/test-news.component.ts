import {BaseNewsInterface} from '../models/base-news.interface';
import {Component} from '@angular/core';
import {BaseNewsComponent} from './base-news.component';
import {BaseDataService} from '../services/base-data.service';
import {ArticleInterface} from '../models/articles/article.interface';

export interface TestNewsInterface extends BaseNewsInterface {
  id: number;
  title: string;
}

@Component({
  selector: 'app-test-news',
  template: '<div></div>',
})
export class TestNewsComponent extends BaseNewsComponent<ArticleInterface> {
  constructor(protected override dataService: BaseDataService<ArticleInterface>) {
    super(dataService);
  }
}
