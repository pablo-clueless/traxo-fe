import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { SocketProvider } from './contexts/SocketContext'
import { AppProvider } from './contexts/AppContext'
import { store } from './store/store'
import App from './App'
import './index.css'

const clientId = import.meta.env.VITE_CLIENT_ID as string
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
            <Provider store={store}>
              <SocketProvider>
                <AppProvider>
                  <App />
                </AppProvider>
              </SocketProvider>
            </Provider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
