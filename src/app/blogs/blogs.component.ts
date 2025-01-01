import {Component} from '@angular/core';
import {BlogsStoreService} from './blogs.store.service';
import {AsyncPipe} from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {NewsItemComponent} from '../base-news/news-item/news-item.component';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {BlogInterface} from '../models/blogs/blog.interface';
import {BaseNewsComponent} from '../base-news/base-news.component';

@Component({
  selector: 'app-blogs',
  imports: [
    AsyncPipe,
    MatGridList,
    MatGridTile,
    NewsItemComponent,
    NgxSpinnerComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
  providers: [BlogsStoreService]
})
export class BlogsComponent extends BaseNewsComponent<BlogInterface> {
  constructor(protected override dataService: BlogsStoreService) {
    super(dataService);
  }
}
