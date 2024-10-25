import { useEffect, useState } from "react"
import "./Post.css"
import { getLikesByPostId } from "../../services/LikeService"

export const Post = ({ post }) => {
    const [likes, setLikes] = useState([])

    useEffect(() => {
        getLikesByPostId(post.id).then((likesArray) => {
            setLikes(likesArray)
        })
    }, [])
    
    return (
        <div className="post">
            <div className="post-info">
                <div className="post-title">
                    <div className="post-title-header">Title</div>
                    <div className="post-title-name">{post.title}</div>
                </div>
                <div className="post-topic">
                    <div className="post-topic-header">Topic</div>
                    <div className="post-topic-name">{post.topic.name}</div>
                </div>
            </div>
            <div className="likes-counter">
                <div className="likes-counter-header"># of Likes:</div>
                <div className="likes-counter-display">
                    {likes.length}
                </div>
            </div>
        </div>
    )
}