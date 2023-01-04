import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext<any | null>(null)
AppContext.displayName = 'Traxo'

interface IChildren {children: React.ReactNode}

const initialState = {
    login: false, logout: false, notifications: false, userMenu: false
}

export const AppProvider:React.FC<IChildren> = ({children}) => {
    const [isClicked, setIsClicked] = useState<typeof initialState>(initialState)
    const [currentMode, setCurrentMode] = useState<string>('dark')

    const handleClicked = (clicked: string) => setIsClicked({...isClicked, [clicked]: true})

    const handleUnclicked = (clicked: string) => setIsClicked({...isClicked, [clicked]: false})

    const setMode = (mode: string) => {
        setCurrentMode(mode)
        localStorage.setItem('mode', JSON.stringify(mode))
    }

    const values = {isClicked, handleClicked, handleUnclicked, currentMode, setMode}
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)