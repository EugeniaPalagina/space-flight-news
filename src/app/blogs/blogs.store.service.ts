import {Injectable} from '@angular/core';
import {BaseDataService} from '../services/base-data.service';
import {BlogInterface} from '../models/blogs/blog.interface';

@Injectable()
export class BlogsStoreService extends BaseDataService<BlogInterface> {
  protected endpoint = 'blogs';
}
