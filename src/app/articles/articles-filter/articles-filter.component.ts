import {Component, EventEmitter, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-articles-filter',
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './articles-filter.component.html',
  styleUrl: './articles-filter.component.scss'
})
export class ArticlesFilterComponent {

  @Output() onSubmitEmit = new EventEmitter();

  public formData: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      limit: new FormControl('10', Validators.maxLength(5)),
    });
  }

  public onSubmit() {
    if (this.formData.valid) {
      this.onSubmitEmit.emit(this.formData.value);
    } else {
      this.formData.markAsTouched();
      this.formData.updateValueAndValidity();
    }
  }
}
