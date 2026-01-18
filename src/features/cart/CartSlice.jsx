import { createSlice } from "@reduxjs/toolkit";

const updateTotals = (state) => {
  state.totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  state.totalPiece = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalPiece: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      updateTotals(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
      updateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
        updateTotals(state);
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateTotals(state);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
