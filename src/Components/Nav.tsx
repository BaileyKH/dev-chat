import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

import { DarkModeContext } from "./Layout";
import { useAuth } from "@/contexts/authContext";
import { signOut } from "@/firebase/auth";

import { BorderBeam } from "@/components/magicui/border-beam.tsx";
import { DarkModeSwitch } from 'react-toggle-dark-mode';



export const Nav = () => {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    const { userLoggedIn } = useAuth()

    const navigate = useNavigate()

    return(
        <nav className="nav-gradient dark:nav-gradient-dark flex items-center justify-between px-6">
            <div>
                <Link to="/" className="font-bold tracking-widest text-2xl">DevChat</Link>
            </div>
            <div className="flex justify-center items-center my-4 space-x-6">
                <DarkModeSwitch
                    sunColor="#7e00ff"
                    moonColor="#7e00ff"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={20}
                />
                <div>
                    <Link to="/dashboard" className="tracking-wide hover:underline hover:underline-offset-4">Dashboard</Link>
                </div>
                <div className="relative w-max h-max p-3 rounded-md bg-primAccent/20">
                    <BorderBeam
                        size={60}
                        duration={4}
                        anchor={90}
                        borderWidth={1.5}
                        colorFrom="#7e00ff"
                        colorTo="#ae60ff"
                        delay={0} 
                    />
                    {userLoggedIn ? 
                        <button onClick={() => { signOut().then(() => { navigate('/') }) }} className="px-4 tracking-wide">Sign out</button>
                        :
                        <Link to="/login" className="px-4 py-2 tracking-wide">Sign in</Link>
                    }
                </div>
            </div>
        </nav>
    )
}