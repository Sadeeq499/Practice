import { Add_Product, Delete_Product } from "./actionType";

// check if the cart is in the local storage then set inital state to the cart  get the cart from local storage

const initialState = {
  products: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case Add_Product:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case Delete_Product:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
