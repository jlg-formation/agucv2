import { TestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { a1 } from '../mock/data';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', () => {
    service.refresh();
    expect(service).toBeTruthy();
  });

  it('should add', () => {
    service.add(a1);
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    service.remove([]);
    expect(service).toBeTruthy();
  });
});
