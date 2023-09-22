import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi, clearSessionData } from "entities/user";
import { SESSION_TAG } from "shared/api";

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  "authentication/logout",
  async (_: unknown, { dispatch }) => {
    dispatch(clearSessionData());

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
  },
);
