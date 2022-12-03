import {Action, configureStore, combineReducers, ThunkAction} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

// import reducers here
import authReducer from './slices/auth'

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistConfig = {key: 'root', storage}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.VITE_ENV !== 'production',
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)