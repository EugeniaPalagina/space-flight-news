import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFilterComponent } from './articles-filter.component';
import {ArticlesStoreService} from '../articles.store.service';

describe('ArticlesFilterComponent', () => {
  let component: ArticlesFilterComponent;
  let fixture: ComponentFixture<ArticlesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesFilterComponent],
      providers: [ArticlesStoreService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
