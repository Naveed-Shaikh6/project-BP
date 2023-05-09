import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../Header";
import Editor from "./Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/post/'+ id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
          setFiles(postInfo.files);
        });
      });
  }, []);

  function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = fetch(`http://localhost:8000/post`, {
      method: 'PUT',
      // mode:'cors',
      body: data,
      credentials: 'include',
    })
    if (response.ok) {
      setRedirect(true);
      console.log('response good')
    };
    
  }

  // if (redirect) {
  //   return <Navigate to={'/post/'+ id} />
  // }
  
  if (redirect) {
    return <Navigate to={'/'} />
  }



  return (
    <>
      <Header />
      <form onSubmit={updatePost} className="grid gap-4  justify-center mt-8" >
        <input type="title" placeholder={'Title'} className='border outline-black'
          value={title}
          onChange={ev => setTitle(ev.target.value)} />
        <input type='text' placeholder={'Summary'} className='border outline-black'
          value={summary}
          onChange={ev => setSummary(ev.target.value)}
        />
        <input type="file"
          onChange={ev => setFiles(ev.target.files)}
        />
        <Editor onChange={setContent} value={content} />
        <button className='lg:mt-14 bg-black text-white rounded-md ' >Update Post</button>
      </form>
    </>
  )
}