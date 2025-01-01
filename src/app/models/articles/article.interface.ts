import {BaseNewsInterface} from '../base-news.interface';

export interface ArticleInterface extends BaseNewsInterface {
  featured: boolean
  launches: any[]
  events: any[]
}

