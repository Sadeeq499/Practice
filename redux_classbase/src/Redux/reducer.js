import {
  Add_To_Cart,
  Remove_From_Cart,
  Increment_Quantity,
  Decrement_Quantity,
  Empty_Cart,
} from "./actionType";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const { id, title, image, price } = action.payload;
      const check = state.cart.find((item) => item.id === id);
      if (check) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, { id, title, image, price, quantity: 1 }],
        };
      }

    case Remove_From_Cart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case Increment_Quantity:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case Decrement_Quantity:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case Empty_Cart:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
