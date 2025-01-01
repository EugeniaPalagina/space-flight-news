import {ArticleInterface} from './article.interface';

export interface ArticlesResponseInterface extends Response {
  count: number;
  results: ArticleInterface[]
}
