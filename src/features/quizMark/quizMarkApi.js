import { apiSlice } from "../api/apiSlice";

const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizMark: builder.query({
      query: (id) => `/quizMark?student_id=${id}`,
    }),
    getQuizzesMark: builder.query({
      query: () => `/quizMark`,
    }),
    addQuizMark: builder.mutation({
      query: (data) => ({
        url: "/quizMark",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetQuizMarkQuery,
  useGetQuizzesMarkQuery,
  useAddQuizMarkMutation,
} = quizMarkApi;
