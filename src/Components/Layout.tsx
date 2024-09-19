import { createContext, useState, useEffect } from "react";

import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer";

import { Toaster } from "@/components/ui/toaster"

interface DarkModeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

const defaultDarkModeContext: DarkModeContextType = {
    darkMode: false,
    toggleDarkMode: () => {}
};

export const DarkModeContext = createContext<DarkModeContextType>(defaultDarkModeContext);

export const Layout = () => {

    const initialDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(initialDarkMode)

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
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <Nav />
            <Outlet context={{ darkMode }}/>
            <Toaster />
            <Footer />
        </DarkModeContext.Provider>
    );
}