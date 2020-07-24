import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { faRedo, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../interfaces/article';
import { interval, Observable, of } from 'rxjs';

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

  counter = 0;

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

  remove(): void {
    console.log('remove');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.length = 0;
  }

  refresh(): void {
    console.log('refresh');
    this.articleService.refresh();
  }
}
