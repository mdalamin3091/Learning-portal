import { apiSlice } from "../api/apiSlice";

const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzes: builder.query({
            query: () => "/quizzes",
        }),

        getQuiz: builder.query({
            query: (id) => `/quizzes/${id}`,
        }),

        editQuiz: builder.mutation({
            query: ({ id, data }) => ({
                url: `/quizzes/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),

        deleteQuiz: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetQuizQuery,
    useGetQuizzesQuery,
    useEditQuizMutation,
    useDeleteQuizMutation,
} = quizApi;
