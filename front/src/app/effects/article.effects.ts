import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
} from '../actions/article.actions';
import { timer, EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { ResourceArticleService } from '../services/resource-article.service';

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles().type),
      mergeMap(() =>
        this.resourceArticle.retrieveAll().pipe(
          delay(2000),
          map((articles) =>
            loadArticlesSuccess({
              data: articles,
            })
          ),
          catchError((err) =>
            of(
              loadArticlesFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private resourceArticle: ResourceArticleService
  ) {}
}
