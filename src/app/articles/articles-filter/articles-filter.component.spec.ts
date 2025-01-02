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

  it('should initialize form with default value', () => {
    expect(component.formData.value).toEqual({ limit: '10' });
  });

  it('should emit form value on valid submit', () => {
    const spy = spyOn(component.onSubmitEmit, 'emit');
    component.formData.setValue({ limit: '20' });
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith({ limit: '20' });
  });

  it('should not emit form value if form is invalid', () => {
    const spy = spyOn(component.onSubmitEmit, 'emit');

    component.formData.setValue({ limit: '123456' });
    component.onSubmit();

    console.log(component.formData.value)
    expect(spy).not.toHaveBeenCalled();
  });

  it('should update validity of form controls', () => {
    component.formData.setValue({ limit: '123456' });
    expect(component.formData.valid).toBeFalse();

    component.formData.setValue({ limit: '12345' });
    expect(component.formData.valid).toBeTrue();
  });
});
