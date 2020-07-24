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
  removeArticleSuccess,
  removeArticleFailure,
} from '../actions/article.actions';
import { timer, EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError, delay, tap } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { ResourceArticleService } from '../services/resource-article.service';
import { Article } from '../interfaces/article';
import { AppState, selectArticle } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { stockRoute } from '../misc/routes';

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
      ofType<{ type: string; data: Article }>(ArticleActionType.ADD),
      delay(2000),
      mergeMap((action) =>
        this.resourceArticle.add(action.data).pipe(
          map((articles) => {
            this.router.navigate([stockRoute]);
            return addArticleSuccess({
              data: articles,
            });
          }),
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

  removeArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; data: string[] }>(ArticleActionType.REMOVE),
      delay(2000),
      mergeMap((action) =>
        this.resourceArticle.remove(action.data).pipe(
          map((articles) =>
            removeArticleSuccess({
              data: articles,
            })
          ),
          catchError((err) =>
            of(
              removeArticleFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  log$ = createEffect(
    () =>
      this.actions$.pipe(
        tap((action) => {
          console.log('perform action: ', action.type);
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private resourceArticle: ResourceArticleService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.store.pipe(select(selectArticle)).subscribe((articles) => {
      localStorage.setItem('articles', JSON.stringify(articles));
    });

    setTimeout(() => {
      this.store.dispatch(loadArticles());
    }, 0);
  }
}
