import {BaseDataService} from './base-data.service';
import {TestBed} from '@angular/core/testing';
import {BaseNewsRequestInterface} from '../models/base-news.request.interface';
import {BaseDataServiceMock} from './base-data.service.mock';

describe('TestDataService with Mock', () => {
  let service: BaseDataService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: BaseDataService, useClass: BaseDataServiceMock}],
    });
    service = TestBed.inject(BaseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get mock news', (done: DoneFn) => {
    const requestData: BaseNewsRequestInterface = { limit: 1, ordering: ['-published_at', '-updated_at'] };

    service.getNews(requestData).subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.results.length).toBe(1);
      expect(response.count).toBe(1);
      done();
    });
  });

  it('should get mock news by id', (done: DoneFn) => {
    service.getNewsById(1).subscribe((response) => {
      expect(response.title).toBe('Collaboration Is Key to A Strong Materials Discipline');
      done();
    });
  });
});
