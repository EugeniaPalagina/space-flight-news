import {Injectable} from '@angular/core';
import {ReportInterface} from '../models/reports/report.interface';
import {BaseDataService} from '../services/base-data.service';

@Injectable()
export class ReportsStoreService extends BaseDataService<ReportInterface> {
  protected endpoint = 'reports';
}
