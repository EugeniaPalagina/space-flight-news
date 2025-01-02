import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsComponent } from './blogs.component';
import {BlogsStoreService} from './blogs.store.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('BlobsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsComponent],
      providers: [BlogsStoreService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
