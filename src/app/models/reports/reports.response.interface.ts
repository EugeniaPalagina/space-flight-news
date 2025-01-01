import {ReportInterface} from './report.interface';

export interface ReportsResponseInterface extends Response {
  count: number;
  results: ReportInterface[]
}
