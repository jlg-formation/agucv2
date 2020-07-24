import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  MetaReducer,
} from '@ngrx/store';
import {
  loadArticles,
  loadArticlesFailure,
  loadArticlesSuccess,
} from '../actions/article.actions';
import { environment } from '../../environments/environment';
import { Article } from '../interfaces/article';

export interface ArticleState {
  collection: Article[];
}

const initialArticleState: ArticleState = {
  collection: [{ name: 'Tondeuse à gazon', price: 340, qty: 5 }],
};

const articleReducer = createReducer(
  initialArticleState,
  on(loadArticles, (state) => {
    console.log('load article start');
    return state;
  }),
  on(loadArticlesFailure, (state, props) => {
    console.log('load article failure', props.error);
    return state;
  }),
  on(loadArticlesSuccess, (state, props) => {
    console.log('load article success', props.data);
    return { ...state, collection: props.data };
  })
);

export interface AppState {
  article: ArticleState;
}

export const reducers: ActionReducerMap<AppState> = {
  article: articleReducer,
};

export const selectArticle = (state: AppState): Article[] =>
  state.article.collection;

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
