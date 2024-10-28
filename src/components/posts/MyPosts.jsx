import { useEffect, useState } from "react"
import { deletePostById, getPostsByUserId } from "../../services/PostService"
import { Link } from "react-router-dom"


export const MyPosts = ({ currentUser }) => {
    const [myPosts, setMyPosts] = useState([])

    const handleReset = () => {
        getPostsByUserId(currentUser.id).then((postArray) => {
            setMyPosts(postArray)
        })
    }

    const handlePostDeletion = (postId) => {
        deletePostById(postId).then(() => {
            handleReset()
        })
    }

    useEffect(() => {
        handleReset()
    }, [])

    return (
        <div className="my-posts">
            {myPosts.map((postObject) => {
                return (
                    <div className="my-post" key={postObject.id}>
                        <Link to={`/posts/${postObject.id}`} key={postObject.id}>
                            <div className="my-post-title">
                                {postObject.title}
                            </div>
                        </Link>
                        <button 
                            className="my-post-delete"
                            name="my-post-delete"
                            value={postObject.id}
                            onClick={(event) => {
                                handlePostDeletion(parseInt(event.target.value))
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}