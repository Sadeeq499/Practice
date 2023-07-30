// // store.js
// import { createStore } from "redux";
// import { counterReducer, ProductReducer } from "./Reducers";

// const store = createStore({
//   counterReducer,
//   ProductReducer,
// });

// export default store;

// store.js
// store.js
import { createStore } from "redux";
import { counterReducer } from "./Reducers";
const store = createStore(counterReducer);

export default store;
