import { createContext, useState, useEffect } from "react";

import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

import { Outlet, useNavigate } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer";

interface DarkModeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

const defaultDarkModeContext: DarkModeContextType = {
    darkMode: false,
    toggleDarkMode: () => {}
};

export const DarkModeContext = createContext<DarkModeContextType>(defaultDarkModeContext);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export const Layout = () => {

    const initialDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(initialDarkMode)

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString())

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
                baseTheme: darkMode ? dark : [],
            }}>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                <Nav />
                <Outlet context={{ darkMode }}/>
                <Footer />
            </DarkModeContext.Provider>
        </ClerkProvider>
    );
}