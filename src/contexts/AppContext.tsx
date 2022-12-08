import React, {createContext, useContext, useState} from 'react'

const AppContext = createContext<any | null>(null)
AppContext.displayName = 'Traxo'

interface IChildren {children: React.ReactNode}

const initialState = {
    login: false, logout: false, notifications: false, userMenu: false
}

const AppProvider:React.FC<IChildren> = ({children}) => {
    const [isClicked, setIsClicked] = useState<typeof initialState>(initialState)

    const values = {isClicked, }
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)