import { useEffect,useState } from "react";
import Header from "../Header";
import Post from "../post/Post";

export default function IndexPage() {
    const [ posts,setPosts ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
    },[])
    return (
        <>
        <Header/>
          {posts.length > 0 && posts.map(post => (
            <Post {...post}/>
          ))}
        </>
    )
}