import { useContext } from 'react';

import { SignUp } from '@clerk/clerk-react'

import { DarkModeContext } from '@/components/Layout';


export const Register = () => {

    const { darkMode } = useContext(DarkModeContext)



    return(
        <section>
            <div className={`w-full h-screen flex justify-center items-center ${darkMode ? "bg-[url('src/assets/images/signin/signin:up.svg')]" : "bg-[url('src/assets/images/signin/light-signup.svg')]"} bg-cover bg-center bg-no-repeat overflow-hidden`}>
                <SignUp path="/register" />
            </div>
        </section>
    );
}