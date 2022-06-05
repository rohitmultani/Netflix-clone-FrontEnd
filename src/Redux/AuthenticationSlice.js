import { createSlice } from "@reduxjs/toolkit";

const initialState = { IsloggedIn: false, Email: "", Password: "", token: "" };

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    SignUp: (state,  {payload} ) => {
      console.log(payload)
      if (payload) {
        state.Email = payload.Email;
        state.Password = payload.Password;
        state.token = payload.token;
      }
    },
    logIn: (state, { payload }) => {
      if (payload) {
        state.IsloggedIn = true;
        state.token = payload.token;
      }
    },
    logOut: (state) => {
      state.IsloggedIn = false;
      state.token = "";
    },
  },
});

export const AuthenticationSliceActions = AuthenticationSlice.actions;
