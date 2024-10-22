import { useEffect, useState } from "react"
import "./Posts.css"
import { getAllPosts } from "../../services/PostService.jsx"
import { Post } from "./Post.jsx"


export const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((postArray) => {
            setPosts(postArray)
        })
    }, [])


    return (
        <div className="all-posts">
            {posts.map((postObject) => {
                return (
                    <Post post={postObject} key={postObject.id}/>
                )
            })}
        </div>
    )
}