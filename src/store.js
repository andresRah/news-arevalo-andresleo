import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// utilidad para ver las acciones realizadas
const logger = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed("Dispatching...", action.type);
  console.log("Previous State: ", store.getState());
  console.log("Action: ", action);
  result = next(action);
  console.log("Next: ", store.getState());
  console.groupEnd();
  return result;
};

const storeFactory = () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

export default storeFactory;
