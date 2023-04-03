import { apiSlice } from "../api/apiSlice";

const assignmentMarksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssignmentMarks: builder.query({
            query: () => "/assignmentMark",
        }),

        getAssignmentMark: builder.query({
            query: (id) => `/assignmentMark/${id}`,
        }),

        editAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
    }),
});

export const {
    useEditAssignmentMarkMutation,
    useGetAssignmentMarkQuery,
    useGetAssignmentMarksQuery,
} = assignmentMarksApi;
