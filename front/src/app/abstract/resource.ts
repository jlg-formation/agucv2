import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class Resource<T> {
  url = '';
  constructor(private http: HttpClient) {}

  setUrl(url: string): void {
    this.url = url;
  }

  retrieveAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }
}
