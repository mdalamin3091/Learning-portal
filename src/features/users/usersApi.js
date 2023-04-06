import { apiSlice } from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users?_limit=20`
        })
    })
})


export const {useGetUsersQuery} = usersApi;