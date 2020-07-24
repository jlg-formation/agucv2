import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import {
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFailure,
  addArticle,
  ArticleActionType,
  addArticleSuccess,
  addArticleFailure,
} from '../actions/article.actions';
import { timer, EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { ResourceArticleService } from '../services/resource-article.service';
import { Article } from '../interfaces/article';

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActionType.LOAD),
      delay(2000),
      mergeMap(() =>
        this.resourceArticle.retrieveAll().pipe(
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

  addArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActionType.ADD),
      delay(2000),
      mergeMap((action: { type: string, data: Article }) =>
        this.resourceArticle.add(action.data).pipe(
          map((articles) =>
            addArticleSuccess({
              data: articles,
            })
          ),
          catchError((err) =>
            of(
              addArticleFailure({
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
