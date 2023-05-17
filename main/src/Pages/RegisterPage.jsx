import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../Header";
export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (password === ConfirmPassword) {
            // response.status === 200
            alert('registered  succesfull');
            window.location.href = '/login';

        } else {
            alert('passwords do not match')
            // alert.warn('password do not match');
            alert('registration failed')
        }

    }
    return (
        <>
          
            <Header />

            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

                <div className=" w-full max-w-md space-y-8">

                    <form className="mt-8 space-y-6" onSubmit={register} >
                        <span className="pl-44 text-3xl">Register</span>
                        <div className="-space-y-px rounded-md">
                            <div>
                                <input id="email" name="email" type="email" autoComplete="on"
                                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}

                                />
                            </div>
                            <br />

                            <div>
                                <input id="name" name="name" type="name" autoComplete="on"
                                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Name"
                                    value={username}
                                    onChange={ev => setUsername(ev.target.value)}

                                />
                            </div>
                            <br />
                           
                            <div>
                                <input id="password" name="password" type="password" autoComplete="on"
                                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)}
                                />
                            </div>
                            <br />
                            <div>
                                <input id="Cpassword" name="Cpassword" type="password" autoComplete="on"
                                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Confirm Password"
                                    value={ConfirmPassword}
                                    onChange={ev => setConfirmPassword(ev.target.value)}
                                />
                            </div>
                            <br />

                          
                        </div>

                        <div className="flex items-center justify-between">
                        </div>
                        <div>
                            <button type="submit"
                                className="-mt-5 group relative flex w-full justify-center rounded-md bg-gray-800  hover:bg-gray-950 px-3 py-2 text-sm font-semibold text-white "
                            >
                                Register
                            </button>
                            <a>Already have an account.. </a> <Link to={'/login'}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}