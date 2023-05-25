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
            alert('registration failed')
        }

    }
    return (
        <>

            <Header />

            {/* <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

                <div className=" w-full max-w-md space-y-8">

                    <form className="mt-8 space-y-6" onSubmit={register} >
                        <span className="pl-44 text-3xl ">Register</span>
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
                            <a className="">Already have an account.. </a> <Link className="underline text-blue-800" to={'/login'}>Login</Link>
                        </div>
                    </form>
                </div>
            </div> */}

            <div className='bg-gray-200'>
                <div className="flex items-center justify-center min-h-screen -mt-14">
                    <div className="bg-white p-8 rounded  shadow-md max-w-sm w-full">
                        <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
                        <form onSubmit={register}>
                            <div className="mb-2">
                                <label className="block text-gray-700 font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                                    value={username}
                                    onChange={ev => setUsername(ev.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 font-bold mb-2">Password</label>
                                <input type="password" id="password1" name="password1" autoComplete="on"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)}
                                     />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                                <input type="password" id="password2" name="password2" autoComplete="on"
                                    className="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500" 
                                    value={ConfirmPassword}
                                    onChange={ev => setConfirmPassword(ev.target.value)}
                                    />
                            </div>
                            <div>
                                <button type="submit"
                                    className="bg-blue-500 text-white p-3 rounded-md w-full font-semibold hover:bg-blue-600">Register</button>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            <span className="text-gray-600">Already have an account?</span>
                            <Link to={'/login'} href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}