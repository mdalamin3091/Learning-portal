import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            })
        }),
        
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi;