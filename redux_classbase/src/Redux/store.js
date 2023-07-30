import { createStore, applyMiddleware, compose } from "redux"; // Import compose from Redux
import { cartReducer } from "./reducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

// Use compose to combine enhancers (including Redux DevTools)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  cartReducer,
  persistedState,
  composeEnhancers(applyMiddleware(/* Middleware goes here if any */))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
