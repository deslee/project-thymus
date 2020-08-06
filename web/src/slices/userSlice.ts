import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
    uid: string,
    token: string,
    name: string,
    email: string,
    verified: boolean,
    // iat: number,
    // exp: number
}

type UserState = {
    authenticated: boolean,
    user: User
}

const initialState: UserState = {
    authenticated: false,
    user: {
        token: '',
        name: '',
        email: '',
        verified: false,
        uid: '',
        // iat: 0,
        // exp: 0
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.authenticated = true
            state.user = action.payload
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;