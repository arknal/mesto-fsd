import { sessionApi } from "../api/sessionApi";
import { type User } from "./types";
import { createSlice } from "@reduxjs/toolkit";

type SessionSliceState =
  | {
      accessToken: string;
      user: User;
      isAuthorized: true;
    }
  | {
      isAuthorized: false;
      accessToken?: null;
      user: null;
    };

const initialState: SessionSliceState = {
  isAuthorized: false,
  user: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuthorized = true;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export const selectIsAuthorized = (state: RootState) =>
  state.session.isAuthorized;

// @ts-ignore
export const selectUserId = (state: RootState) => state.session.user.id;

export const selectCurrentUser = (state: RootState) => state.session.user;

export const { clearSessionData } = sessionSlice.actions;
