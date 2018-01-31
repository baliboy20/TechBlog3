import { TestBed, inject } from '@angular/core/testing';

import { BlogModelService } from './blog-model.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogModelService]
    });
  });

  it('should be created', inject([BlogModelService], (service: BlogModelService) => {
    expect(service).toBeTruthy();
  }));
});
