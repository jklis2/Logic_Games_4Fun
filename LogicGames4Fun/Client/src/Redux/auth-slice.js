import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    user: undefined,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },

        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;