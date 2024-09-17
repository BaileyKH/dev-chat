import { useContext, useState, FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { DarkModeContext } from '@/components/Layout';

import { signIn } from '@/firebase/auth';
import { useAuth } from '@/contexts/authContext/';

export const Login = () => {

    const { darkMode } = useContext(DarkModeContext)

    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage("")
        if (!isSigningIn) {
            setIsSigningIn(true)
            try {
                await signIn(email, password)
                setErrorMessage('')
            } catch (err: any) {
                if (err.code === 'auth/invalid-credential') {
                    setErrorMessage('Incorrect Email or Password')
                    setEmail('')
                    setPassword('')
                } else {
                    setErrorMessage('An error occurred. Please try again later.')
                }
            } finally {
                setIsSigningIn(false);
            }
        }
    }

    return(
        <section>
            {userLoggedIn && (<Navigate to="/dashboard" replace={true} />)}
            <div className={`w-full h-screen flex justify-center items-center ${darkMode ? "bg-[url('src/assets/images/signin/signin:up.svg')]" : "bg-[url('src/assets/images/signin/light-signup.svg')]"} bg-cover bg-center bg-no-repeat overflow-hidden`}>
                <div className='flex justify-center items-center my-16'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primLight dark:bg-primDark backdrop-blur-md border-2 border-black/50 dark:border-white/50 rounded-md">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">Welcome Back!</h2>
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
                                    required 
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-primAccent hover:text-secAccent">Forgot password?</a>
                                </div>
                                </div>
                                <div className="mt-2">
                                <input 
                                    id="password"  
                                    type="password" 
                                    autoComplete="current-password" 
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} 
                                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-primDark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    disabled={isSigningIn} 
                                    className={`flex w-full justify-center rounded-md ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-primAccent hover:bg-secAccent transition duration-300'} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                                        {isSigningIn ? 'Logging In...' : 'Log In'}
                                    </button>
                            </div>
                            </form>

                            <div className='flex justify-center items-center mt-10 space-x-2'>
                                <p className="text-center text-sm text-primDark/85 dark:text-primLight/85">
                                Don't have an account?
                                </p>
                                <Link to="/register" className="font-semibold leading-6 text-primAccent hover:text-secAccent">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}