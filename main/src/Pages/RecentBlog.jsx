import React from 'react'
// import Post from '../post/Post'
import { useState, useEffect } from 'react';
import Post from '../post/Post';
import Header from '../Header';
import { Link } from 'react-router-dom';
function RecentBlog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/recent').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])
  return (
    <>
      <Header />

      <div className='flex justify-center bg-gray-100 mr-10 ml-10 rounded-2xl '>
      <Link to={'/'} className='flex m-2 font-bold underline'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
Home</Link>

<Link to={'/createblog'} className='flex m-2  underline font-bold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Create New Blog</Link>
</div>

      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}

      {/* <h1>hii</h1> */}
    </>
  )
}

export default RecentBlog
