import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {formatISO9075} from 'date-fns'
import Header from '../Header';
import { UserContext } from "../UserContext";
import { Link ,useNavigate} from "react-router-dom";
// import {axios} from 'axios'
import axios from 'axios'
// const navigate = useNavigate();
export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);  
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, [])


    const deleteRequest = async () => {
      const res = await axios
        .delete(`http://localhost:8000/delete/${id}`)
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };
    const handleDelete = () => {
      deleteRequest()
        .then(() => navigate(`/`))
        // .then(() => navigate("/"));
    };

    if (!postInfo) return '';
    return (
        <>
        <Header/>
        <div className="m-2  rounded-md shadow-sm ">
        <Link to={'/'} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-4">
  <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
</svg>


</Link>
        <h1 className="flex justify-center font-bold   ml-1 mr-1 lg:text-4xl   ">{postInfo.title}</h1>
        
       
        {/* <time className="flex justify-center font-medium">Posted on : {formatISO9075(new Date(postInfo.createdAt))}</time> */}
        <div className="flex justify-center">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
        <div  className="flex justify-center">
        <button className="bg-red-500 font-semibold text-white w-32 rounded-md p-1 " onClick={handleDelete}>Delete This Post
                </button>
          {/* <Link to={`/edit/${postInfo._id}`} className="flex" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit this post
          </Link> */}
        </div>
      )}
        <div className="justify-center mt-3">
            <div className='flex justify-center w-1/1 h-72 '>
                <img className="flex border  mb-2 rounded-xl" src={`http://localhost:8000/${postInfo.cover}`} />
            </div>
            {/* <div className="font-medium mt-2  ml-3" dangerouslySetInnerHTML={{__html:postInfo.content}} /> */}
            <div className="font-medium m-4">{postInfo.content}</div>
        </div>
        <div className="m-4 font-black">
          <h1>Blog Details :</h1>
          <p>Blog Created Date And Time : {formatISO9075(new Date(postInfo.createdAt))}</p>
          <p className="-mt-1">Author Name : {postInfo.author.username}</p>
          
        </div>
        </div>
        </>
    )
}