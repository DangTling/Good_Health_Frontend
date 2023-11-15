import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
