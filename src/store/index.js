import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

export const authAction = authSLice.actions;
export const store = configureStore({
  reducer: authSLice.reducer,
});
