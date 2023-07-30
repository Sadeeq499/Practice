import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  }, // Set initial state to an empty object
  reducers: {
    // Your reducer functions here
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items.push({ id, title, price, image, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // increases the quantity of the item
    increasesQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.items[index].quantity += 1;
    },

    // decreases the quantity of the item
    decreasesQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      } else {
        state.items = state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
    },

    // create an empty state when the user logs out
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  emptyCart,
  addToCart,
  removeFromCart,
  increasesQuantity,
  decreasesQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
