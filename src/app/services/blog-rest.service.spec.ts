import { TestBed, inject } from '@angular/core/testing';

import { BlogRestService } from './blog-restful.service';

describe('BlogRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogRestService]
    });
  });

  it('should be created', inject([BlogRestService], (service: BlogRestService) => {
    expect(service).toBeTruthy();
  }));
});
