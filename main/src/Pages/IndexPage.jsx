import { useEffect, useState } from "react";
import Header from "../Header";
import Post from "../post/Post";
import Icon from "./Icon";
import Footer from "./Footer";


export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, [])
    return (
        <>
            <Header />
            <Icon />
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}

            <Footer/>
        </>
    )
}