import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    assignments: []
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        loadAllAssignments: (state, action) => {
            state.assignments = action.payload;
        }
    }
})


export const { loadAllAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;