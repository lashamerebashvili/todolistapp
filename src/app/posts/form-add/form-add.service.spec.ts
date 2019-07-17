import { TestBed } from '@angular/core/testing';

import { FormAddService } from './form-add.service';

describe('FormAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAddService = TestBed.get(FormAddService);
    expect(service).toBeTruthy();
  });
});
