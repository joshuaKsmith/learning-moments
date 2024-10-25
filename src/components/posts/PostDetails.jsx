import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../services/PostService"


export const PostDetails = ({ currentUser }) => {
    const [post, setPost] = useState({})
    const { postId } = useParams()

    useEffect(() => {
        getPostById(postId).then((data) => {
            const postObject = data[0]
            if (postObject) {
                setPost(postObject)
            }
        })
    }, [postId])

    return (
        <section className="post">
            <header className="post-header">
                {post.title}
            </header>
            <div className="post-author">
                {post.user?.name}
            </div>
            <div>
                <span className="post-info">Topic : </span>
                {post.topic?.name}
            </div>
            <div>
                <span className="post-info">Date : </span>
                {post.date}
            </div>
            <div className="post-body">
                {post.body}
            </div>
            <div>
                <span className="post-info"> # of Likes : </span>
                {post.likes?.length}
            </div>
            <footer className="post-footer">
                <div className="btn-container">
                    {parseInt(currentUser.id) === parseInt(post.userId) ? (
                        <button
                            className="btn btn-edit"
                        >
                            Edit
                        </button>
                    ) : ("")}

                    {parseInt(currentUser.id) !== parseInt(post.userId) ? (
                        <button
                            className="btn btn-like"
                        >
                            Like
                        </button>
                    ) : ("")}
                </div>
            </footer>
        </section>
    )
}