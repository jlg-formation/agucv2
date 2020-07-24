import { createAction, props } from '@ngrx/store';
import { Article } from '../interfaces/article';

export const loadArticles = createAction('[Article] Load Articles');

export const loadArticlesSuccess = createAction(
  '[Article] Load Articles Success',
  props<{ data: Article[] }>()
);

export const loadArticlesFailure = createAction(
  '[Article] Load Articles Failure',
  props<{ error: Error }>()
);
