import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNewsComponent } from './base-news.component';

describe('BaseNewsComponent', () => {
  let component: BaseNewsComponent;
  let fixture: ComponentFixture<BaseNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
