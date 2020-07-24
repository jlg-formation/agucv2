import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export abstract class Resource<T> {
  url = '';
  constructor(private http: HttpClient) {}

  setUrl(url: string): void {
    this.url = url;
  }

  retrieveAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  add(t: T): Observable<T[]> {
    return this.http
      .post<void>(this.url, t)
      .pipe(switchMap(() => this.retrieveAll()));
  }

  remove(ids: string[]): Observable<T[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    return this.http
      .delete<void>(this.url, options)
      .pipe(switchMap(() => this.retrieveAll()));
  }
}
