import { useContext, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { DarkModeContext } from '@/components/Layout';

import { passwordReset } from '@/firebase/auth';

import { toast } from '@/components/hooks/use-toast';


export const PasswordReset = () => {

    const { darkMode } = useContext(DarkModeContext)

    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage("")
        setSuccessMessage("")

        if (!email) {
            setErrorMessage("Please enter your email address")
            return;
        }

        setIsSending(true);
        try {
            await passwordReset(email)
            setEmail('')
            setSuccessMessage("Password reset email has been sent. Please check your inbox")
        } catch (err:any) {
            if (err.code === 'auth/user-not-found') {
                setErrorMessage("No account found with that email address")
            } else if (err.code === 'auth/invalid-email'){
                setErrorMessage("Invalid email address")
            } else {
                setErrorMessage("An error occurred. Please try again.")
            } 
        } finally {
            setIsSending(false)
        }


    }

    return(
        <section>
            <div className={`w-full h-screen flex justify-center items-center ${darkMode ? "bg-[url('src/assets/images/signin/signin:up.svg')]" : "bg-[url('src/assets/images/signin/light-signup.svg')]"} bg-cover bg-center bg-no-repeat overflow-hidden`}>
                <div className='flex justify-center items-center my-16'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primLight dark:bg-primDark backdrop-blur-md border-2 border-black/50 dark:border-white/50 rounded-md">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">Reset Password</h2>
                            {errorMessage && <p className='text-red-600 text-xs text-center pt-1'>{errorMessage}</p>}
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6">Email</label>
                                <div className="mt-2">
                                <input 
                                    id="email" 
                                    type="email" 
                                    autoComplete='email' 
                                     
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    disabled={isSending}
                                    onClick={() => {
                                        successMessage ? toast({
                                          title: "Success",
                                          description: successMessage 
                                        }) : ''
                                      }} 
                                    className={`flex w-full justify-center rounded-md ${isSending ? 'bg-gray-300 cursor-not-allowed' : 'bg-primAccent hover:bg-secAccent transition duration-300'} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                                        {isSending ? 'Sending...' : 'Reset Password'}
                                    </button>
                            </div>
                            </form>

                            <div className='flex justify-center items-center mt-10 space-x-2'>
                                <Link to="/login" className="flex w-max justify-center rounded-md bg-primAccent hover:bg-secAccent transition duration-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}