import React, { createContext, useContext } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { AppProvider } from '@toolpad/core/AppProvider'
import {
    AuthenticationContext,
    SessionContext,
    Session,
} from '@toolpad/core'
import { createTheme } from '@mui/material'

// Definir o tipo para o contexto do tema
interface ThemeDarkMode {
    isDarkMode: typeof darkTheme | typeof lightTheme; // Tipos de tema
    toggleTheme: () => void;
}

// Criar um contexto para o tema com valores iniciais
const ThemeDarkMode = createContext<ThemeDarkMode | undefined>(undefined)

const demoSession: Session = {
    user: {
        name: 'Bharat Kashyap',
        email: 'bharatkashyap@outlook.com',
        image: 'https://avatars.githubusercontent.com/u/19550456',
    },
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
})

export function App() {
    const [session, setSession] = React.useState<Session | null>(null)
    const [isDarkMode, setTheme] = React.useState(darkTheme)

    const authentication = React.useMemo(() => ({
        signIn: () => setSession(demoSession),
        signOut: () => setSession(null),
    }), [])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme.palette.mode === 'dark' ? lightTheme : darkTheme))
    }

    return (
        <AppProvider theme={isDarkMode}>
            <AuthenticationContext.Provider value={authentication}>
                <SessionContext.Provider value={session}>
                    <ThemeDarkMode.Provider value={{ isDarkMode, toggleTheme }}>
                        <RouterProvider router={router} />
                    </ThemeDarkMode.Provider>
                </SessionContext.Provider>
            </AuthenticationContext.Provider>
        </AppProvider>
    )
}

// Hook para usar o contexto de tema
export const useTheme = () => {
    const context = useContext(ThemeDarkMode)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
