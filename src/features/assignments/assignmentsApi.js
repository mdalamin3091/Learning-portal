import { apiSlice } from "../api/apiSlice";

export const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "/assignments",
    }),

    getAssignment: builder.query({
      query: (id) => `/assignments/${id}`,
    }),

    addAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),
      
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data } = await queryFulfilled;
        try {
          dispatch(apiSlice.util.updateQueryData("getAssignments", undefined, (draft) => {
            draft.push(data)
          }))
        } catch (err) {
          console.log(err)
        }
      }
    }),

    editAssignment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssignmentQuery,
  useGetAssignmentsQuery,
  useEditAssignmentMutation,
  useDeleteAssignmentMutation,
  useAddAssignmentMutation,
} = assignmentsApi;
