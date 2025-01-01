import {Injectable} from '@angular/core';
import {ArticleInterface} from '../models/articles/article.interface';
import {BaseDataService} from '../services/base-data.service';

@Injectable()
export class ArticlesStoreService extends BaseDataService<ArticleInterface> {
  protected endpoint = 'articles';
}
