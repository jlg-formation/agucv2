import { createAction, props } from '@ngrx/store';
import { Article } from '../interfaces/article';

export enum ArticleActionType {
  LOAD = '[Article] Load Articles',
  ADD = '[Article] Add Articles',
  REMOVE = '[Article] Remove Articles',
}

export const loadArticles = createAction(ArticleActionType.LOAD);

export const loadArticlesSuccess = createAction(
  ArticleActionType.LOAD + ' Success',
  props<{ data: Article[] }>()
);

export const loadArticlesFailure = createAction(
  ArticleActionType.LOAD + ' Failure',
  props<{ error: Error }>()
);

export const addArticle = createAction(
  ArticleActionType.ADD,
  props<{ data: Article }>()
);
export const addArticleSuccess = createAction(
  ArticleActionType.ADD + ' Success',
  props<{ data: Article[] }>()
);
export const addArticleFailure = createAction(
  ArticleActionType.ADD + ' Failure',
  props<{ error: Error }>()
);

export const removeArticle = createAction(
  ArticleActionType.REMOVE,
  props<{ data: string[] }>()
);
export const removeArticleSuccess = createAction(
  ArticleActionType.REMOVE + ' Success',
  props<{ data: Article[] }>()
);
export const removeArticleFailure = createAction(
  ArticleActionType.REMOVE + ' Failure',
  props<{ error: Error }>()
);
