import { createSlice } from '@reduxjs/toolkit'

import { User } from 'types'

interface IUser {
 user: User | null
 isLoggedIn: boolean
}

const initialState: IUser = {
 user: null,
 isLoggedIn: false,
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  login: (state, action) => {
    state.user = action.payload
    state.isLoggedIn = true
    localStorage.setItem('traxo-user', JSON.stringify(action.payload))
},
logout: (state) => {
    state.user = null
    state.isLoggedIn = false
    localStorage.removeItem('traxo-user')
  },
 },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
