import { useContext } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import Header from "../Header"
export default function LoginPage() {
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo } = useContext(UserContext)
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });

        } else {
            alert('wrong credentials')
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <Header />

            {/* <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">

                    <form className="mt-8 space-y-6" onSubmit={login}>

                        <div className="-space-y-px rounded-md ">
                            <span className="pl-48 text-3xl">Login</span>
                            <br />
                            <br />
                            <div>

                                <input id="email-address" name="email" type="email"
                                    className="h-9 pl-2 relative block w-full rounded-t-md border-1 border-slate-900 outline-blue-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}
                                />
                            </div>
                            <br />
                            <div>


                                <input id="password" name="password" type="password" autoComplete="on"
                                    className="h-9 pl-2 relative block w-full rounded-b-md border-1 border-slate-950 outline-blue-600   sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                        </div>
                        <div>
                            <button type="submit" className=" group relative flex w-full justify-center rounded-md bg-gray-800  px-3 -mt-5 py-2 text-sm font-semibold text-white  hover:bg-gray-950 ">
                                Login
                            </button>
                            <a href="/register">Dont have an account? </a> <Link to={'/register'}>Register</Link>
                        </div>
                    </form>
                </div>
            </div> */}


            <div className='bg-gray-200'>
                <div className="flex items-center justify-center min-h-screen -mt-14">
                    <div className="bg-white p-8 rounded  shadow-md max-w-sm w-full">
                        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
                        <form onSubmit={login}>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}
                                />

                            </div>

                            <div className="mb-8">
                                <label className="block text-gray-700 font-bold mb-2">Password</label>
                                <input type="password" id="current-password" autoComplete="on" name="current-password"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit"
                                    className="bg-blue-500 text-white p-3 rounded-md w-full font-bold text-xl hover:bg-blue-600">Login</button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <span className="text-gray-600">Dont have an account?</span>
                            <Link to={'/register'} href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}