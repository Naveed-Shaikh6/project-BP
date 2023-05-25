import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:8000/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    function logout() {
        fetch('http://localhost:8000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null)
        window.location.href = '/login';
    }

    const email = userInfo.email;
    return (
        <>
            <header className=' p-2 flex justify-between  mb-4  backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200 sticky top-0 z-10 bg-white '>
                <Link to={'/'} className='flex text-2xl font-bold item-center gap-1 p-1 cursor-pointer ml-2 text-black  '>Any Blogs</Link>
                {/* <div className="md:">
                <button className="pr-6 font-bold">Home</button>
                <button className="pt-2 font-bold">Recent Blogs</button>
                <button className="pl-6 font-bold">Create Post</button>
                </div> */}
                {email && (
                    <> 
                      
                        <button onClick={logout} className="mr-2 font-semibold  my-1 cursor-pointer bg-slate-800 text-gray-100  rounded-xl  w-20 hover:text-black hover:bg-white hover:border-2 border-black  ">Logout</button>
                    </>
                )}
                {!email && (
                    <>
                        <div className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 bg-slate-800 text-white mr-4'>
                            <Link className=" hover:text-white" to={'/register'}>Register</Link>|
                            <Link className=" hover:text-white" to={'/login'}>Login</Link>
                        </div>
                    </>
                )}

            </header>
        </>
    )
}

