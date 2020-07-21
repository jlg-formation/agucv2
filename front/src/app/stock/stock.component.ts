import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles$ = new BehaviorSubject<Article[]>([
    { name: 'Tournevis', price: 3.99, qty: 100 },
    { name: 'Tournevis', price: 3.99, qty: 100 },
    { name: 'Tournevis', price: 3.99, qty: 100 },
    { name: 'Tournevis', price: 3.99, qty: 100 },
  ]);

  constructor() {}

  ngOnInit(): void {}
}
