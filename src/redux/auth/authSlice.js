import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  user: {
    nickname: null,
    email: null,
  },
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, action) => ({
      ...state,
      userId: action.payload.userId,
      user: { nickname: action.payload.nickname, email: action.payload.email },
    }),
    authStateChange: (state, action) => ({
      ...state,
      stateChange: action.payload,
    }),
    authSignOut: () => state,
  },
});

export const { authStateChange, updateUserProfile, authSignOut } =
  authSlice.actions;
