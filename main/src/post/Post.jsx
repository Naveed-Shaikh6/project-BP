import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {

  return (

    <>
      <div className='row bs   rounded-2xl bg-gray-50 border shadow-md m-4 '>
        <div className='col-md-4 '>
          <img src={'http://localhost:8000/' + cover} className='smallimg object-cover rounded-md ' />
        </div>
        <div className='col-md-8 '>
          <p className='font-medium pt-1'>Posted on : {formatISO9075(new Date(createdAt))}</p>
          <p className='font-medium '> Author : @{author.username}</p>
          <p className='font-bold text-2xl'>{title}</p>
          <p className='font-semibold pt-1 overflow-hidden'>{summary}</p>
          <Link to={`/post/${_id}`} className=' float-right pr-6   '>
            <button className='   border-1 border-black  rounded-md w-28 p-1 font-bold hover:bg-black hover:text-white  '>Read More</button>
          </Link>
        </div>
      </div>
    </>

  )
}

