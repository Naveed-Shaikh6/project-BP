import { useContext } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import Header from "../Header"
export default function LoginPage() {
    // const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)
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
            {/* <form action="">
           <h1>Login</h1>
            <input type='text' placeholder="username"/>
            <input type='password' placeholder="password"/>
            <button>Login</button>
           </form> */}
           <Header/>

            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">

                    <form className="mt-8 space-y-6" onSubmit={login}>

                        <div className="-space-y-px rounded-md ">
                            <span className="pl-48 text-3xl">Login</span>
                            <br />
                            <br />
                            <div>

                                <input id="email-address" name="email" type="email"
                                    className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}
                                />
                            </div>
                            <br />
                            <div>


                                <input id="password" name="password" type="password"
                                    className="pl-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            </div>
        </>
    )
}