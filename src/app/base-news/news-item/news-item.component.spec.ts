import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemComponent } from './news-item.component';
import {BaseNewsInterface} from '../../models/base-news.interface';
import {By} from '@angular/platform-browser';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item title and summary', () => {
    const mockItem = <BaseNewsInterface>{
      title: 'Collaboration Is Key to A Strong Materials Discipline',
      summary: 'NASA has a strong need for advanced materials and processes',
    };

    component.item = mockItem;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('mat-card-title');
    const descriptionElement = fixture.nativeElement.querySelector('.news-item__p');

    expect(titleElement.textContent).toBe('Collaboration Is Key to A Strong Materials Discipline');

    expect(descriptionElement.textContent.trim()).toBe('NASA has a strong need for advanced materials and processes');
  });
});
