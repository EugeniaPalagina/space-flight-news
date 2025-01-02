import {Component} from '@angular/core';
import {ArticlesStoreService} from './articles.store.service';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ArticlesFilterComponent} from './articles-filter/articles-filter.component';
import {BaseNewsComponent} from '../base-news/base-news.component';
import {ArticleInterface} from '../models/articles/article.interface';
import {NewsContainerComponent} from '../base-news/news-container/news-container.component';

@Component({
  selector: 'app-articles',
  imports: [
    AsyncPipe,
    MatFormFieldModule,
    ArticlesFilterComponent,
    NewsContainerComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  providers: [ArticlesStoreService]
})
export class ArticlesComponent extends BaseNewsComponent<ArticleInterface>{

  constructor(protected override dataService: ArticlesStoreService) {
    super(dataService);
  }
}
