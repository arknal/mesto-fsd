import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi } from "entities/user";
import { isFetchBaseQueryError } from "shared";

type Params = {
  email: string;
  password: string;
};

export const loginThunk = createAsyncThunk<void, Params, { state: RootState }>(
  "authentication/login",
  async (body: Params, { dispatch }) => {
    try {
      await dispatch(sessionApi.endpoints.login.initiate(body))
        .unwrap()
        .then((res) => {
          // @ts-ignore
          localStorage.setItem("token", res.token);
        });
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (error.status === 401) {
          throw new Error("Аккаунт с такими данными не найден");
        }
      }

      throw new Error("Произошла ошибка. Попробуйте еще раз");
    }
  },
);
