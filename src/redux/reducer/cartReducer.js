import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.cart.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
    },
    incrementQuantity: (state, action) => {
      const itemIdToIncrement = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === itemIdToIncrement
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decrementQuantity: (state, action) => {
      const itemIdToDecrement = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === itemIdToDecrement
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      state.cart = state.cart.filter((item) => item.quantity > 0);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setCart,
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
