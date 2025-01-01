import {BaseNewsInterface} from '../base-news.interface';

export interface BlogInterface extends BaseNewsInterface {
  featured: boolean,
  launches: any[],
  events: any[],
}
