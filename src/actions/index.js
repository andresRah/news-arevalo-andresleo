import {
  CLEAR_NEWS,
  LOADING_NEWS_IN_PROGRESS,
  LOADING_SUCESS,
  ERROR,
} from "../types/newsTypes";
import { API_BASE_URL } from "../utils/constants";

export const loadingError = (bool) => ({
  type: ERROR,
  hasError: bool,
});

export const loadingInProgress = (bool) => ({
  type: LOADING_NEWS_IN_PROGRESS,
  isLoading: bool,
});

export const loadingSuccess = (news) => ({
  type: LOADING_SUCESS,
  news: news,
});

export const clearNews = () => ({
  type: CLEAR_NEWS,
});

export const getNews = (currentDate) => {
  return (dispatch) => {
    const url = `${API_BASE_URL}/latest/${currentDate}`;
    requestNews(dispatch, url);
  };
};

export const getNewsByCategory = (categoryId) => {
  return (dispatch) => {
    const url = `${API_BASE_URL}/news/category/${categoryId}`;
    requestNews(dispatch, url);
  };
};

export const getNewsByFilterWord = (searchWord) => {
  return (dispatch) => {
    const url = `${API_BASE_URL}/search/${searchWord}`;
    requestNews(dispatch, url);
  };
};

const requestNews = (dispatch, url) => {
  dispatch(clearNews());
  dispatch(loadingError(false));
  dispatch(loadingInProgress(true));

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(loadingInProgress(false));

      return response;
    })
    .then((response) => response.json())
    .then((news) => dispatch(loadingSuccess(news)))
    .catch(() => dispatch(loadingError(true)));
};
