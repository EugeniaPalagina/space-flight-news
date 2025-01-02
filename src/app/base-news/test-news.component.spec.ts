import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestNewsComponent} from './test-news.component';
import {BaseDataService} from '../services/base-data.service';
import {BaseDataServiceMock} from '../services/base-data.service.mock';
import {ArticleInterface} from '../models/articles/article.interface';
import {of} from 'rxjs';

describe('Test News Component', () => {
  let component: TestNewsComponent;
  let fixture: ComponentFixture<TestNewsComponent>;
  let mockDataService: BaseDataServiceMock<ArticleInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNewsComponent],
      providers: [{ provide: BaseDataService, useClass: BaseDataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockDataService = TestBed.inject(BaseDataService) as BaseDataServiceMock<ArticleInterface>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default news list', (done: DoneFn) => {
    component.newsList$.subscribe((news) => {
      console.log(news)
      expect(news.length).toBe(1);
      expect(news[0].id).toBe(1);
      expect(news[0].title).toEqual('Collaboration Is Key to A Strong Materials Discipline');
      done();
    });
  });

  it('should set loading state to true during data load', () => {
    spyOn(mockDataService, 'getNews').and.callFake(() => {
      return of({ results: [], count: 0 });
    });

    component.loadItems({ limit: 10 });

    component.loading$.subscribe((loading) => {
      expect(loading).toBeFalse();
    });
  });

  it('should call the data service with correct parameters', () => {
    const spy = spyOn(mockDataService, 'getNews').and.callThrough();
    component.loadItems({ limit: 5 });
    expect(spy).toHaveBeenCalledWith({ limit: 5 });
  });
});

