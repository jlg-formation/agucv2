import { Injectable } from '@angular/core';

import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.getArticles());

  constructor() {
    console.log('article service instantiated');

    // quand je touche la liste d'article, je met a jour le localstorage.
    this.articles$.subscribe((articles) => {
      localStorage.setItem('articles', JSON.stringify(articles));
    });
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }

  add(article: Article): void {
    this.articles$.next([...this.articles$.value, article]);
  }

  remove(selectedArticles: Article[]): void {
    this.articles$.next(
      this.articles$.value.filter((a) => !selectedArticles.includes(a))
    );
  }

  refresh(): void {
    this.articles$.next(this.getArticles());
  }
}
