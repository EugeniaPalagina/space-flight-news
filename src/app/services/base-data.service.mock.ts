import {Observable, of} from 'rxjs';
import {BaseNewsRequestInterface} from '../models/base-news.request.interface';
import {BaseNewsResponseInterface} from '../models/base-news.response.interface';
import {ArticleInterface} from '../models/articles/article.interface';

export class BaseDataServiceMock<T> {

  getNews(data: BaseNewsRequestInterface): Observable<BaseNewsResponseInterface<T>> {
    return of(<BaseNewsResponseInterface<T>>{
      count: 1,
      results: [
        {
          "id": 1,
          "title": "Collaboration Is Key to A Strong Materials Discipline",
          "url": "https://www.nasa.gov/general/collaboration-is-key-to-a-strong-materials-discipline/",
          "image_url": "https://www.nasa.gov/wp-content/uploads/2024/12/screenshot-2024-12-24-at-1-12-05%E2%80%AFpm.png",
          "news_site": "NASA",
          "summary": "NASA has a strong need for advanced materials and processes (M&P) across the realms of robotic- and crewed-spaceflight, as well as aeronautics, particularly when one acknowledges that all craft must be made of something. To meet that need, the materials discipline relies on collaboration—both between centers and across disciplines. Reaching the Agency’s Moon-to-Mars objectives will […]",
          "published_at": "2024-12-24T18:33:43Z",
          "updated_at": "2024-12-24T18:40:08.692807Z",
          "featured": false,
          "launches": [],
          "events": []
        }
      ]
    })
  }

  getNewsById(id: number): Observable<ArticleInterface> {
    return of(<ArticleInterface>{
      "id": 1,
      "title": "Collaboration Is Key to A Strong Materials Discipline",
      "url": "https://www.nasa.gov/general/collaboration-is-key-to-a-strong-materials-discipline/",
      "image_url": "https://www.nasa.gov/wp-content/uploads/2024/12/screenshot-2024-12-24-at-1-12-05%E2%80%AFpm.png",
      "news_site": "NASA",
      "summary": "NASA has a strong need for advanced materials and processes (M&P) across the realms of robotic- and crewed-spaceflight, as well as aeronautics, particularly when one acknowledges that all craft must be made of something. To meet that need, the materials discipline relies on collaboration—both between centers and across disciplines. Reaching the Agency’s Moon-to-Mars objectives will […]",
      "published_at": "2024-12-24T18:33:43Z",
      "updated_at": "2024-12-24T18:40:08.692807Z",
      "featured": false,
      "launches": [],
      "events": []
    });
  }
}
