// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = CartSlice.actions;
// export default CartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  items: [],
  reducers: {
    // Your reducer functions here
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
