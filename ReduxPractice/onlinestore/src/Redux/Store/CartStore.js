// import { configureStore } from "@reduxjs/toolkit";
// import CardReducer from "../CartSlice";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage
// import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root", // a unique key to define your root object in the storage
//   storage,
//   // Optionally, you can blacklist certain reducers that you don't want to persist
//   // blacklist: ['reducer1', 'reducer2'],
// };

// const rootReducer = combineReducers({
//   cart: CardReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     reducer: persistedReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
