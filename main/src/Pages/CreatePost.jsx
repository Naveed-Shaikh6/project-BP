import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';
import Header from '../Header';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ]
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];
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
        // console.log(files)
        const response = await fetch('http://localhost:8000/post', {
            method: 'POST',
            body: data,
            credentials:'include',
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
        <Header/>
        <form onSubmit={createNewPost} className="grid gap-4  justify-center mt-8" >
            <input type="title" placeholder={'Title'} className='border outline-black'
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <input type='text' placeholder={'Summary'} className='border outline-black'
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input type="file"
                // value={files}
                onChange={ev => setFiles(ev.target.files)}
            />

            <ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                modules={modules}
                formats={formats}
                className='-mt-2 mb-20 lg:mb-1' />
            <button className='lg:mt-14 bg-black text-white rounded-md '>Create Post</button>
        </form>
        </>
    )
}