import { createStore, applyMiddleware, compose } from "redux";
import history from "../history";
import createRootReducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk, logger))
  );

  window.store = store; //TODO: убрать в продакшне
  return store;
}
