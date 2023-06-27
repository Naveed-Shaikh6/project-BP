import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { formatISO9075 } from 'date-fns'
import Header from '../Header';
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Footer from "./Footer";
import Advertisment from "./Advertisment";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
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
  };

  if (!postInfo) return '';

  return (
    <>
      <Header />
      <div className="m-2  rounded-md shadow-sm ">
        <Link to={'/'} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-4">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
        </Link>
        <h1 className="flex justify-center font-bold   ml-1 mr-1 lg:text-4xl   ">{postInfo.title}</h1>
        <div className="flex justify-center">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className="flex justify-center">
            <button className="bg-red-500 font-semibold text-white w-32 rounded-md p-1 " onClick={handleDelete}>Delete This Post
            </button>

          </div>
        )}
        <div className="justify-center mt-3">
          <div className='flex justify-center w-1/1 h-72 '>
            <img className="flex border  mb-2 rounded-xl" src={`http://localhost:8000/${postInfo.cover}`} />
          </div>
          {/* <div className="font-medium mt-2  ml-3" dangerouslySetInnerHTML={{__html:postInfo.content}} /> */}
          <p className="font-medium  ml-14 mr-14 mt-4 ">{postInfo.content}</p>
        </div>
         <Advertisment/>
        <div className="mt-4 ml-14  font-black">
          <h1>Blog Details :</h1>
          <p>Blog Created Date And Time : {formatISO9075(new Date(postInfo.createdAt))}</p>
          <p className="-mt-1 pb-2">Author Name : {postInfo.author.username}</p>

        </div>
      </div>
      <Footer/>
    </>
    
  )
}