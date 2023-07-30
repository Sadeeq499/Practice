import {
  Add_To_Cart,
  Remove_From_Cart,
  Increment_Quantity,
  Decrement_Quantity,
  Empty_Cart,
} from "./actionType";

// add to cart
export const AddToCart = (item) => {
  return {
    type: Add_To_Cart,
    payload: item,
  };
};

// remove from cart
export const RemoveFromCart = (item) => {
  return {
    type: Remove_From_Cart,
    payload: item,
  };
};

// increment quantity
export const IncrementQuantity = (item) => {
  return {
    type: Increment_Quantity,
    payload: item,
  };
};

// decrement quantity
export const DecrementQuantity = (item) => {
  return {
    type: Decrement_Quantity,
    payload: item,
  };
};

// empty cart
export const EmptyCart = () => {
  return {
    type: Empty_Cart,
  };
};
