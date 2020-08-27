import { connect } from "react-redux";
import { getNews, clearNews } from "../actions";
import { Home } from "../pages/Home";

// Redux state to props
const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

// Actions to props
const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: (currentDate) => dispatch(getNews(currentDate)),
  onClearNews: () => dispatch(clearNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
