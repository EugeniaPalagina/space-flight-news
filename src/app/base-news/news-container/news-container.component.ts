import {Component, Input} from '@angular/core';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {NewsItemComponent} from '../news-item/news-item.component';
import {ReportInterface} from '../../models/reports/report.interface';
import {ArticleInterface} from '../../models/articles/article.interface';
import {BlogInterface} from '../../models/blogs/blog.interface';

@Component({
  selector: 'news-container',
  templateUrl: 'news-container.component.html',
  imports: [
    NgxSpinnerComponent,
    MatGridList,
    MatGridTile,
    NewsItemComponent
  ],
  styleUrl: 'news-container.component.scss'
})
export class NewsContainerComponent {
  @Input() newsList!: ReportInterface[] | ArticleInterface[] | BlogInterface[];

  @Input() loading!: boolean;
}
