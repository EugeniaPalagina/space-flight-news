import {Component, Input} from '@angular/core';
import {BaseNewsInterface} from '../../models/base-news.interface';
import {MatCardModule} from '@angular/material/card';
import {ArticleInterface} from '../../models/articles/article.interface';

@Component({
  selector: 'app-news-item',
  imports: [
    MatCardModule
  ],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss'
})
export class NewsItemComponent {

  @Input() item!: BaseNewsInterface;
}
