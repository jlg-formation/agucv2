import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HttpArticleService, url } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { a1 } from '../mock/data';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should be created with 404 error', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
    expect(service).toBeTruthy();
  });

  it('should refresh', () => {
    http.expectOne(url).flush([]);
    service.refresh();
    http.expectOne(url).flush([]);
    expect(service).toBeTruthy();
  });

  it('should add', () => {
    http.expectOne(url).flush([]);
    service.add(a1);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush([], { status: 500, statusText: 'Internal Error' });
    http.expectOne(url).flush([]);
    expect(service).toBeTruthy();
  });

  it('should add with error', () => {
    http.expectOne(url).flush([]);
    service.add(a1);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush([], { status: 201, statusText: 'Created' });
    http.expectOne(url).flush([]);
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    http.expectOne(url).flush([]);
    service.remove([a1]);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush([], { status: 201, statusText: 'Created' });
    http.expectOne(url).flush([]);
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    http.expectOne(url).flush([]);
    service.remove([a1]);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush([], { status: 500, statusText: 'Internal Error' });
    http.expectOne(url).flush([]);
    expect(service).toBeTruthy();
  });
});
