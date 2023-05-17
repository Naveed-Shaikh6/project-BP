import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';
import Header from '../Header';
import Editor from './Editor';

export default function CreatePost() {
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
            <div className='bg-red-100 p-3 outline  '>
            <div className=' bg-gray-100 rounded-xl ml-20 mr-20   '>
                    <form onSubmit={createNewPost} className="grid gap-4  justify-center " >
                        <input className="outline-transparent ml-2 mr-2  font-bold mt-4" type="title" placeholder= {'Title'} 
                            value={title}
                            onChange={ev => setTitle(ev.target.value)} />
                        <input type='text' placeholder={'Summary'} 
                       
                        className="outline-transparent ml-2 mr-2  font-bold"
                            value={summary}
                            onChange={ev => setSummary(ev.target.value)}
                        />
                        <input type="file"
                            // value={files}
                            className="outline-transparent ml-2 mr-2  font-bold "
                            onChange={ev => setFiles(ev.target.files)}
                        />
                        <Editor value={content} onChange={setContent} />
                        <br/>
                        <button
                        className="outline-transparent ml-2 mr-2 bg-black font-bold  mb-4 text-white rounded-2xl"
                         >Create Post</button>
                    </form>
               
            </div>
            </div>
        </>
    )
}