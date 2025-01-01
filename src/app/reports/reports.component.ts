import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NewsItemComponent} from "../base-news/news-item/news-item.component";
import {NgxSpinnerComponent} from "ngx-spinner";
import {ReportsStoreService} from './reports.store.service';
import {BaseNewsComponent} from '../base-news/base-news.component';
import {ReportInterface} from '../models/reports/report.interface';

@Component({
  selector: 'app-reports',
    imports: [
        AsyncPipe,
        MatGridList,
        MatGridTile,
        NewsItemComponent,
        NgxSpinnerComponent
    ],
  templateUrl: '../base-news/base-news.component.html',
  styleUrl: './reports.component.scss',
  providers: [ReportsStoreService]
})
export class ReportsComponent extends BaseNewsComponent<ReportInterface>{

  constructor(protected override dataService: ReportsStoreService) {
    super(dataService);
  }
}
