import {
  CLEAR_NEWS,
  LOADING_NEWS_IN_PROGRESS,
  LOADING_SUCESS,
  ERROR,
} from "../types/newsTypes";

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
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${currentDate}`)
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
};
