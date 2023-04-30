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
    }

    const username = userInfo?.username;
    return (
        <>
            <header className='border-b p-2 flex justify-between  mb-4  '>
                <Link to={'/'} className='flex text-2xl font-bold item-center gap-1 p-1 cursor-pointer  '>AN Blogs</Link>
                {username && (
                    <>
                    <div className="">
                        <Link to={'/create'} className="mt-2 text-lg flex "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-7 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Create new post
 </Link>
 </div>
                        {/* <h2 className="mt-2 ml-96">{username}</h2> */}
                        <a onClick={logout} className="mr-6 text-lg mt-2 cursor-pointer">Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <div className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 bg-black text-white mr-4'>
                            <Link to={'/register'}>Register</Link>|
                            <Link to={'/login'}>Login</Link>
                        </div>
                    </>
                )}

            </header>
        </>
    )
}