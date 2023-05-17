import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../Header';
import { Link } from 'react-router-dom';
function CreateBlog() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('file', files[0])
    ev.preventDefault();
    // console.log(files)
    const response = await fetch('http://localhost:8000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Header />
      <div className='bg-slate-100 h-screen -mt-6 '>
        <div className='pt-2'>
          <Link to={'/'}  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-8   ">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
          </svg>
          </Link>
        </div>
        <div className=' flex justify-center mr-24 ml-24  rounded-2xl shadow-2xl bg-white '>
          <div className='grid '>
            <div className=' font-bold m-2 flex justify-center text-blue-700 text-3xl   '>Post Your Blog</div>
            <label className='ml-2 mb-1  font-medium text-lg '>Title</label>
            <input type='text' className='border-1 border-slate-500 outline-blue-600 mr-2 ml-2 h-9  rounded-lg lg:w-96'
              value={title}
              onChange={ev => setTitle(ev.target.value)}
            />
            <label className='ml-2 mb-1 mt-4 font-medium text-lg'>Summary</label>
            <input type='text' className='border-1 border-slate-500 outline-blue-600 mr-2 ml-2  rounded-lg h-9'
              value={summary}
              onChange={ev => setSummary(ev.target.value)}
            />
            <label className='ml-2 mt-4 mb-1 font-medium text-lg'>Image</label>
            <input type='file' className='border-1 border-slate-500 outline-blue-600 mr-2 ml-2  rounded-lg'
              onChange={ev => setFiles(ev.target.files)}
            />
            <label className=' ml-2 mb-1 mt-4 font-medium text-lg'>Content</label>
            <textarea className='border-1 border-slate-500  outline-blue-600 mr-2 ml-2 h-24 rounded-lg'
              onChange={ev => setContent(ev.target.value)} />
            <button className='bg-blue-700 p-2 mr-2 ml-2 mt-4 rounded-full mb-4 text-xl font-bold text-white hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-1'
              onClick={createNewPost}>Create Blog</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateBlog
