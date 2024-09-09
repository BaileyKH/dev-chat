import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DarkModeContext } from '@/components/Layout';

export const SignIn = () => {

    const { darkMode } = useContext(DarkModeContext)

    return(
        <section>
            <div className={`w-full ${darkMode ? "bg-[url('src/assets/images/signin/signin:up.svg')]" : "bg-[url('src/assets/images/signin/light-signup.svg')]"} bg-cover bg-center bg-no-repeat overflow-hidden`}>
                <div className='flex justify-center items-center my-16'>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primLight dark:bg-primDark backdrop-blur-md border-2 border-black/50 dark:border-white/50 rounded-md">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">Welcome Back!</h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium leading-6">Username</label>
                                <div className="mt-2">
                                <input id="userName" name="userName" type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-primAccent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secAccent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</button>
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