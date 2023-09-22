import { baseApi, SESSION_TAG } from "shared/api";
import { type User, type Session } from "../model/types";
import { RequestLoginBody, AnswerLoginBody } from "./types";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: `/signin`,
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
    me: build.query<User, void>({
      query: () => ({
        url: `/users/me`,
      }),
      providesTags: [SESSION_TAG],
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = sessionApi;
