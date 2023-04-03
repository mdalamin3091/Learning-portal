import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken: undefined,
    user: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            localStorage.setItem("auth", JSON.stringify(action.payload));
        },

        registeredUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            localStorage.setItem("auth", JSON.stringify(action.payload));
        },

        logoutUser: (state, action) => {
            state.accessToken = undefined;
            state.user = undefined;
            localStorage.clear();
        }
    }
})

export const { loggedInUser, registeredUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;