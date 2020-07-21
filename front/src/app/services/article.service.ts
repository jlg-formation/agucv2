import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([
    { name: 'Tournevis', price: 3.99, qty: 100 },
    { name: 'Tournevis cruciforme', price: 3.99, qty: 100 },
    { name: 'Pince', price: 3.99, qty: 100 },
    { name: 'Scie', price: 3.99, qty: 100 },
  ]);

  constructor() {
    console.log('article service instantiated');
  }
}
