import { Injectable } from '@angular/core';

import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {
    console.log('article service instantiated');
  }

  getArticles(): Article[] {
    const defaultArticles = [
      { name: 'Tournevis', price: 4.99, qty: 100 },
      { name: 'Tournevis cruciforme', price: 3.99, qty: 12 },
      { name: 'Pince', price: 2, qty: 10 },
      { name: 'Scie', price: 3.99, qty: 120 },
    ];
    const str = localStorage.getItem('articles');
    if (!str) {
      return defaultArticles;
    }
    return JSON.parse(str);
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }
}
