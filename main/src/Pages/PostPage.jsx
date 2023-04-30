import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {formatISO9075} from 'date-fns'
import Header from '../Header';
import { UserContext } from "../UserContext";
export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    // const {userInfo} = useContext(UserContext);  
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, [])

    if (!postInfo) return '';
    return (
        <>
        <Header/>
        <h1 className="flex justify-center font-bold mt-3 ml-1 mr-1 ">{postInfo.title}</h1>
        <time className="flex justify-center ">Posted on : {formatISO9075(new Date(postInfo.createdAt))}</time>
        {/* {userInfo.id === postInfo.author._id && (
        <div className="flex justify-center">
        <button className="cursor-pointer bg-black text-white rounded-md ">Edit this post</button>
        </div>
        )} */}
        <div className="justify-center mt-4">
            <div className='flex justify-center w-1/1 h-72 '>
                <img className="flex border outline mb-2" src={`http://localhost:8000/${postInfo.cover}`} />
            </div>
            <div className="font-medium mt-2  ml-3" dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
        </>
    )
}