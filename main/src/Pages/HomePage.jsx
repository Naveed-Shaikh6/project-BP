import React from 'react'
// import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
function HomePage({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <>
    {/* <div className='row bs rounded-2xl bg-gray-100 shadow-md m-4 '>
      <div className='col-md-4 '>
        <img src={'http://localhost:8000/'+cover} className='smallimg object-cover rounded-md ' />
      </div>
      <div className='col-md-8 '>
        <p className='font-medium '>Posted on : {formatISO9075(new Date(createdAt))}</p>
        <p className='font-medium'> By : @{author.username}</p>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='font-semibold  '>{summary}</p>
        <Link to={`/post/${_id}`} className='float-right  '>
            <button  className='bg-black  text-white rounded-md w-28 '>Read More</button>
        </Link>
      </div>
      </div> */}
{/* 
      <div className='grid gap-2 grid-cols-3' >
      <div>
        <img src={'http://localhost:8000/'+cover} className='object-cover rounded-md ' />
      </div>
      <div>
          <p className='font-medium '>Posted on : {formatISO9075(new Date(createdAt))}</p>
        <p className='font-medium'> By : @{author.username}</p>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='font-semibold  '>{summary}</p>
      </div>

      </div> */}

      </>
  )
}

export default HomePage
