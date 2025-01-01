import {BlogInterface} from './blog.interface';

export interface BlogsResponseInterface extends Response {
  count: number;
  results: BlogInterface[]
}
