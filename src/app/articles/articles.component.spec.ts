import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import {ArticlesStoreService} from './articles.store.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent, BrowserAnimationsModule],
      providers: [ArticlesStoreService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
