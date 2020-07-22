import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

const url = 'http://localhost:3000/ws/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article service');
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.http.get<Article[]>(url).subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.articles$.next(data);
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => console.log('complete'),
    });
  }

  refresh(): void {
    this.retrieveAll();
  }

  add(article: Article): void {
    super.add(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        console.log('post ok');
        this.refresh();
      },
      error: (err) => {
        console.log('err: ', err);
        alert(`erreur technique: l'ajout n'a pas été fait.`);
        this.refresh();
      },
      complete: () => console.log('complete'),
    });
  }
}
