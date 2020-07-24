import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';
import { stockRoute } from 'src/app/misc/routes';
import { AppState } from 'src/app/reducers';
import { addArticle } from 'src/app/actions/article.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl(1.0, Validators.required),
    qty: new FormControl(100, Validators.required),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    const article: Article = this.f.value as Article;
    this.store.dispatch(addArticle({ data: article }));
  }
}
