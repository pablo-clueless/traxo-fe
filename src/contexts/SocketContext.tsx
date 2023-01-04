import React, { createContext, useContext, useEffect } from 'react'
import io from 'socket.io-client'

import { useAppDispatch } from '../hooks'
import { SocketData } from '../interfaces'
import { add } from '../store/slices/notification'

const uri = import.meta.env.VITE_SERVER_URI as string
const socket = io(uri)

const SocketContext = createContext<any | null>(null)
SocketContext.displayName = 'Traxo Notify'

interface Props { children: JSX.Element }

export const SocketProvider = ({children}:Props) => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        socket.on('response', (data: SocketData) => {
            dispatch(add(data))
        })
    },[socket])
    
  return (
    <SocketContext.Provider value={{socket}}>
        {children}
    </SocketContext.Provider>
  )
}

export const useSocketContext = () => useContext(SocketContext)