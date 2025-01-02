import {Component} from '@angular/core';
import {BlogsStoreService} from './blogs.store.service';
import {AsyncPipe} from '@angular/common';
import {BlogInterface} from '../models/blogs/blog.interface';
import {BaseNewsComponent} from '../base-news/base-news.component';
import {NewsContainerComponent} from '../base-news/news-container/news-container.component';

@Component({
  selector: 'app-blogs',
  imports: [
    AsyncPipe,
    NewsContainerComponent
  ],
  templateUrl: 'blogs.component.html',
  styleUrl: './blogs.component.scss',
  providers: [BlogsStoreService]
})
export class BlogsComponent extends BaseNewsComponent<BlogInterface> {
  constructor(protected override dataService: BlogsStoreService) {
    super(dataService);
  }
}
