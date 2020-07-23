import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { a1 } from '../mock/data';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created without localstorage', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
  });

  it('should be created with existing localstorage', () => {
    localStorage.setItem('articles', '[]');
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

  it('should refresh', () => {
    service.refresh();
    expect(service).toBeTruthy();
  });
});
