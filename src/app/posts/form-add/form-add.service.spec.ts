import { TestBed } from '@angular/core/testing';

import { FormAddService } from './form-add.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule, ReactiveFormsModule, MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const service: FormAddService = TestBed.get(FormAddService);
    expect(service).toBeTruthy();
  });
});
