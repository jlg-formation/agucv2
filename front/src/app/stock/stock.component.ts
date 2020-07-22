import { Component, OnInit } from '@angular/core';
import { faRedo, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRedo = faRedo;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  selectedArticles = [] as Article[];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article): void {
    if (this.selectedArticles.includes(article)) {
      const index = this.selectedArticles.findIndex((a) => a === article);
      this.selectedArticles.splice(index, 1);
      return;
    }
    this.selectedArticles.push(article);
  }
}
