// import Header from "../Header";
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function Post({ _id, title, summary, cover, content, createdAt, author }) {

  return (
    <>
      <div className='row bs   rounded-2xl bg-gray-50 border shadow-md m-4 '>
        <div className='col-md-4 '>
          <img src={'http://localhost:8000/' + cover} className='smallimg object-cover rounded-md ' />
        </div>
        <div className='col-md-8 '>
          <p className='font-medium pt-1'>Posted on : {formatISO9075(new Date(createdAt))}</p>
          <p className='font-medium '> By : @{author.username}</p>
          <p className='font-bold text-2xl'>{title}</p>
          <p className='font-semibold pt-1 overflow-hidden'>{summary}</p>
          <Link to={`/post/${_id}`} className=' float-right pr-6   '>
            <button className='   border-1 border-black  rounded-md w-28 p-1 font-bold hover:bg-black hover:text-white  '>Read More</button>
          </Link>
        </div>
        
      </div>

      {/* <div className=" pl-5 pt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={'http://localhost:8000/' + cover} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {summary}
            </p>
          </div>
          <div className="flex justify-center pt-4  pb-2">
            <span className="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">Read More</span>
          </div>
        </div>        
      </div> */}



    </>
  )
}

