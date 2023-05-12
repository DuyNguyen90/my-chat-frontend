import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        user: null,
        error: null,
    },
    reducers: {
        authSuccess: (state, action) => {
            state.isAuthorized = true;
            state.user = action.payload;
            state.error = null;
        },
        authing: (state, action) => {
            state.isAuthorized = false;
            state.user = null;
            state.error = null;
        },
        socialAuthing: (state, action) => {
            state.isAuthorized = false;
            state.user = null;
            state.error = null;
        },
        authFailure: (state, action) => {
            console.log(action.payload);
            state.isAuthorized = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state, action) => {
            state.isAuthorized = false;
            state.user = null;
            state.error = null;
        }
    }
});

export const selectAuthState = state => state.auth.isAuthorized;

export const selectUser = state => state.auth.isAuthorized ? state.auth.user : null;

export const {authSuccess, authing, socialAuthing, authFailure, logout} = authSlice.actions;

export default authSlice.reducer;