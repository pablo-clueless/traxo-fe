import { createSlice } from '@reduxjs/toolkit'

import { SocketData } from '../../interfaces'
import { NOTIFICATIONS } from 'constants/test'

interface Notifications {
    notifications: Array<SocketData>
}

const initialState:Notifications = {
    notifications: NOTIFICATIONS
}

const notifications = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        add: (state, action) => {
            state.notifications.push(action.payload)
        },
        read: (state, action) => {
            const id = action.payload
            const notification = state.notifications.find((notification) => notification.id === id)
            if(notification) {
                notification.isRead = true
            }
        },
        remove: (state, action) => {
            const id = action.payload
            state.notifications = state.notifications.filter((notification) => notification.id !== id)
        },
    }
})

export const {add, read, remove} = notifications.actions
export default notifications.reducer