import { apiSlice } from "../api/apiSlice";

const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "/quizzes",
      providesTags: ["quiz"],
    }),

    getQuiz: builder.query({
      query: (id) => `/quizzes/${id}`,
    }),

    addQuiz: builder.mutation({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["quiz"],
    }),

    editQuiz: builder.mutation({
      query: ({ id, data }) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {

        // update all quizzes
        dispatch(
          apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            const index = draft.findIndex((d) => d.id == id);
            draft.splice(index, 1, { ...data, id });
          })
        );

        // update all single quiz
        dispatch(
          apiSlice.util.updateQueryData("getQuiz", id, (draft) => {
            const updatedQuiz = { ...draft, ...data };
            return updatedQuiz;
          })
        );

        try {
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            return draft.filter((quiz) => quiz.id != arg);
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetQuizQuery,
  useGetQuizzesQuery,
  useAddQuizMutation,
  useEditQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
