import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });

export const store = configureStore({
  reducer: rootReducer,
});
