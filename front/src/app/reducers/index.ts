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
  error: string;
  loading: boolean;
}

const initialArticleState: ArticleState = {
  collection: [{ name: 'Tondeuse à gazon', price: 340, qty: 5 }],
  error: '',
  loading: false,
};

const articleReducer = createReducer(
  initialArticleState,
  on(loadArticles, (state) => {
    console.log('load article start');
    return { ...state, error: '', loading: true };
  }),
  on(loadArticlesFailure, (state, props) => {
    console.log('load article failure', props.error);
    return { ...state, error: 'oh zut... erreur technique ;)', loading: false };
  }),
  on(loadArticlesSuccess, (state, props) => {
    console.log('load article success', props.data);
    return { ...state, collection: props.data, error: '', loading: false };
  })
);

export interface AppState {
  article: ArticleState;
}

export const reducers: ActionReducerMap<AppState> = {
  article: articleReducer,
};

// selectors
export const selectArticle = (state: AppState): Article[] =>
  state.article.collection;
export const selectArticleError = (state: AppState): string =>
  state.article.error;
export const selectArticleLoading = (state: AppState): boolean =>
  state.article.loading;

// metareducers
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
