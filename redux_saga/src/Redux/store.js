import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../ReduxSaga/sagas";
import { userReducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Use composeEnhancers to compose the enhancers

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)) // Pass the composed enhancer to createStore
);

sagaMiddleware.run(rootSaga);

export default store;
