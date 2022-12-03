import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { User } from '../../types'

interface IUser {
    user: User | null
    isLoggedIn: boolean
}

const initialState: IUser = {
    user: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {},
        logout: () => {}
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer