import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("user"));
      return value || null;
    }
    return null
  };

const authSlice = createSlice({
    name: "auth",
    initialState:{
        currentUser: getFromLocalStorage()
    },
    reducers: {
        login: (state,action) => {
            state.currentUser = action.payload;
        },
        logout: (state,action) => {
            state.currentUser = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;