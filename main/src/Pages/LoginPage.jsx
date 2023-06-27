import { useContext } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import Header from "../Header"

export default function LoginPage() {
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