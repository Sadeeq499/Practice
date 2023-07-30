import { createStore } from "redux";
import ProductReducer from "./reducer";

export const store = createStore(ProductReducer);
