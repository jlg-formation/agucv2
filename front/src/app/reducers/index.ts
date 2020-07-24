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
  addArticle,
  addArticleSuccess,
  addArticleFailure,
  removeArticle,
  removeArticleFailure,
  removeArticleSuccess,
  ArticleActionType,
} from '../actions/article.actions';
import { environment } from '../../environments/environment';
import { Article } from '../interfaces/article';

export interface ArticleState {
  collection: Article[];
  collectionBefore: Article[];
  error: string;
  loading: boolean;
}

const getArticles = (): Article[] => {
  const str = localStorage.getItem('articles');
  if (!str) {
    return [];
  }
  return JSON.parse(str);
};

const initialArticleState: ArticleState = {
  collection: getArticles(),
  collectionBefore: [],
  error: '',
  loading: false,
};

const articleReducer = createReducer(
  initialArticleState,
  on(loadArticles, addArticle, removeArticle, (state, props) => {
    console.log(props.type);
    let articles = [...state.collection];
    if (props.type === ArticleActionType.ADD) {
      articles.push(props.data);
    }
    if (props.type === ArticleActionType.REMOVE) {
      articles = articles.filter((a) => !props.data.includes(a.id as string));
    }
    return {
      ...state,
      error: '',
      loading: true,
      collectionBefore: state.collection,
      collection: articles,
    };
  }),
  on(
    loadArticlesFailure,
    addArticleFailure,
    removeArticleFailure,
    (state, props) => {
      console.log(props.type);
      return {
        ...state,
        error: 'oh zut... erreur technique ;)',
        loading: false,
        collection: state.collectionBefore,
      };
    }
  ),
  on(
    loadArticlesSuccess,
    addArticleSuccess,
    removeArticleSuccess,
    (state, props) => {
      console.log(props.type);
      return {
        ...state,
        collection: props.data,
        collectionBefore: state.collection,
        error: '',
        loading: false,
      };
    }
  )
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
