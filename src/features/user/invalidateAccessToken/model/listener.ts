import {
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import { invalidateAccessToken } from "shared/api";
import { logoutThunk } from "../../authentication/logout/";

export const invalidateAccessTokenListener = createListenerMiddleware();

export type TypedListening = TypedStartListening<RootState, AppDispatch>;

export const startInvalidateAccessTokenListener =
  invalidateAccessTokenListener.startListening as TypedListening;

startInvalidateAccessTokenListener({
  actionCreator: invalidateAccessToken,
  effect: async (_, api) => {
    api.dispatch(logoutThunk());
  },
});
