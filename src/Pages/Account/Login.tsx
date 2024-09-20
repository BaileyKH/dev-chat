import { useContext } from 'react';

import { SignIn } from '@clerk/clerk-react'

import { DarkModeContext } from '@/components/Layout';


export const Login = () => {

    const { darkMode } = useContext(DarkModeContext)


    return(
        <section>
            <div className={`w-full h-screen flex justify-center items-center ${darkMode ? "bg-[url('src/assets/images/signin/signin:up.svg')]" : "bg-[url('src/assets/images/signin/light-signup.svg')]"} bg-cover bg-center bg-no-repeat overflow-hidden`}>
                <SignIn path="/sign-in" />
            </div>
        </section>
    );
}