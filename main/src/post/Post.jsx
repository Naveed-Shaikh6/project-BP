// import Header from "../Header";
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'
export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <>
<div className=" flex flex-wrap justify-center">
  <div className="w-full md:w-1/3 px-4 mb-8">
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="flex flex-col items-center">
      <Link to={`/post/${_id}`}>
        <img src={'http://localhost:8000/'+cover} alt="Image" className="w-full h-auto mb-4 rounded-lg" />
        </Link>
        {/* <h4 className="text-sm font-bold"></h4>   */}
        <time>Posted on : {formatISO9075(new Date(createdAt))}</time>
        <Link to={'/post/${_id}'}>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        </Link>
        <p className="text-gray-700">{summary}</p>
        <button className="mt-3">Read More</button>
      </div>
    </div>
  </div>
</div>




    </>
  )
}

