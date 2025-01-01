import {Component} from '@angular/core';
import {ArticlesStoreService} from './articles.store.service';
import {AsyncPipe} from '@angular/common';
import {NewsItemComponent} from '../base-news/news-item/news-item.component';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ArticlesFilterComponent} from './articles-filter/articles-filter.component';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {BaseNewsComponent} from '../base-news/base-news.component';
import {ArticleInterface} from '../models/articles/article.interface';

@Component({
  selector: 'app-articles',
  imports: [
    AsyncPipe,
    NewsItemComponent,
    MatGridList,
    MatGridTile,
    MatFormFieldModule,
    ArticlesFilterComponent,
    NgxSpinnerComponent
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
