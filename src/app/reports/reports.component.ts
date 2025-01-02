import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ReportsStoreService} from './reports.store.service';
import {BaseNewsComponent} from '../base-news/base-news.component';
import {ReportInterface} from '../models/reports/report.interface';
import {NewsContainerComponent} from '../base-news/news-container/news-container.component';

@Component({
  selector: 'app-reports',
  imports: [
    AsyncPipe,
    NewsContainerComponent
  ],
  templateUrl: 'reports.component.html',
  styleUrl: './reports.component.scss',
  providers: [ReportsStoreService]
})
export class ReportsComponent extends BaseNewsComponent<ReportInterface>{

  constructor(protected override dataService: ReportsStoreService) {
    super(dataService);
  }
}
