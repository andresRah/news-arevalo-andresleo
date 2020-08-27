import {
  LOADING_NEWS_IN_PROGRESS,
  LOADING_SUCESS,
  ERROR,
  CLEAR_NEWS,
} from "../types/newsTypes";
import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case ERROR:
      return action.hasError;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case LOADING_NEWS_IN_PROGRESS:
      return action.isLoading;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case LOADING_SUCESS:
      return action.news;
    case CLEAR_NEWS:
      return [];
    case ERROR:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  news,
  loadingError,
  loadingInProgress,
});
