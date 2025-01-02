import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routes';
import {MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel, MatTabsModule} from '@angular/material/tabs';
import {ArticlesComponent} from './articles/articles.component';
import {BlogsComponent} from './blogs/blogs.component';
import {ReportsComponent} from './reports/reports.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        BrowserModule,
        MatTabsModule,
      ],
      declarations: [AppComponent],
      providers: [provideAnimations()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Space Flight News' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Space Flight News');
  });
});
