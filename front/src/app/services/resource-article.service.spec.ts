import { TestBed } from '@angular/core/testing';

import { ResourceArticleService } from './resource-article.service';

describe('ResourceArticleService', () => {
  let service: ResourceArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
