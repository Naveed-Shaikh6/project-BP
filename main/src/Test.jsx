import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header';

function Test() {
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
      <div className=' flex justify-center mr-24 ml-24 mt-10 rounded-2xl shadow-2xl  '>

        <div className='grid '>
          <div className='text-4xl font-bold m-2 lg:pl-14'>Post Your Blog</div>
          <label className='ml-2 mb-1  font-medium text-lg '>Title</label>
          <input type='text' className='border-2 border-slate-500 focus:outline-none focus:border-teal-950 mr-2 ml-2 h-9  rounded-lg lg:w-96'
            value={title}
            onChange={ev => setTitle(ev.target.value)}
          />
          <label className='ml-2 mb-1 mt-4 font-medium text-lg'>Summary</label>
          <input type='text' className='border-2 border-slate-500 focus:outline-none focus:border-teal-950 mr-2 ml-2  rounded-lg h-9'
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
          />
          <label className='ml-2 mt-4 mb-1 font-medium text-lg'>Image</label>
          <input type='file' className='border-2 border-slate-500 focus:outline-none focus:border-teal-950 mr-2 ml-2  rounded-lg'
            onChange={ev => setFiles(ev.target.files)}
          />
          <label className=' ml-2 mb-1 mt-4 font-medium text-lg'>Content</label>
          {/* <input type='text' className='outline m-2 rounded-sm'
          value={content}
          onChange={ev => setContent(ev.target.value)}
           /> */}
          <textarea className='border-2 border-slate-500 focus:outline-none focus:border-teal-950 mr-2 ml-2 h-24 rounded-lg'
            onChange={ev => setContent(ev.target.value)} />
          <button className='bg-gray-800 p-2 mr-2 ml-2 mt-4 rounded-full mb-4 text-xl font-bold text-white'
            onClick={createNewPost}>Create Blog</button>
        </div>

      </div>
    </>
  )
}

export default Test
