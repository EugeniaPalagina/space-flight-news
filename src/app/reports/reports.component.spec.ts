import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportsComponent} from './reports.component';
import {ReportsStoreService} from './reports.store.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsComponent],
      providers: [ReportsStoreService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
