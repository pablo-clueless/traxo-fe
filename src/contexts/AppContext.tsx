import React, {createContext, useContext, useState} from 'react'

const AppContext = createContext<any | null>(null)
AppContext.displayName = 'Traxo'

interface IChildren {children: React.ReactNode}

const AppProvider:React.FC<IChildren> = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)