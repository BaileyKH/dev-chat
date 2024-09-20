import { useContext } from "react";
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

import { DarkModeContext } from "./Layout";

import { BorderBeam } from "@/components/magicui/border-beam.tsx";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }



export const Nav = () => {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return(
        <nav className="nav-gradient dark:nav-gradient-dark flex items-center justify-between px-6">
            <div>
                <Link to="/" className="font-bold tracking-widest text-2xl">DevFusion</Link>
            </div>
            <div className="flex justify-center items-center my-4 space-x-6">
                <DarkModeSwitch
                    sunColor="#7e00ff"
                    moonColor="#7e00ff"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={20}
                />
                <div className="relative flex justify-items-center w-max h-max p-3 rounded-md bg-primAccent/20">
                    <BorderBeam
                        size={60}
                        duration={4}
                        anchor={90}
                        borderWidth={1.5}
                        colorFrom="#7e00ff"
                        colorTo="#ae60ff"
                        delay={0} 
                    />
                    <SignedIn>
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Link 
                                    label="Dashboard"
                                    labelIcon={<DotIcon />}
                                    href="/dashboard"
                                />
                                <UserButton.Action label="manageAccount" />
                                <UserButton.Action label="signOut" />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                    <SignedOut>
                        <Link to="/sign-in">Sign In</Link>
                    </SignedOut>
                </div>
            </div>
        </nav>
    )
}