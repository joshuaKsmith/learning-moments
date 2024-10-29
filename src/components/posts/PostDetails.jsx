import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../services/PostService"
import { addLikeEntry, removeLikeEntryById } from "../../services/LikeService"
import "./PostDetails.css"


export const PostDetails = ({ currentUser }) => {
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const [currentUserLikesThisPost, setCurrentUserLikesThisPost] = useState(false)
    const [foundLike, setFoundLike] = useState({})

    const navigate = useNavigate()

    const resetPost = () => {
        getPostById(postId).then((data) => {
            const postObject = data[0]
            if (postObject) {
                setPost(postObject)
            }
        })
    }

    useEffect(() => {
        resetPost()
    }, [postId])

    useEffect(() => {
        const foundLike = post.likes?.find((like) => parseInt(like.userId) === parseInt(currentUser.id))
        if (foundLike) {
            setCurrentUserLikesThisPost(true)
            setFoundLike(foundLike)
        } else {
            setCurrentUserLikesThisPost(false)
        }
    }, [post])

    const handleLikeToggle = () => {
        if (!currentUserLikesThisPost) {
            const newLike = {
                "postId": post.id,
                "userId": currentUser.id
            }
            addLikeEntry(newLike).then(() => {
                navigate("../favorites")
            })
        } else {
            removeLikeEntryById(foundLike.id).then(() => {
                resetPost()
            })
        }
    }

    return (
        <section className="post">
            <header className="post-detail-header">
                {post.title}
            </header>
            <Link to={`/users/${post.userId}`} >
                <div className="post-author">
                    <div className="post-author-label">By : </div>
                    {post.user?.name}
                </div>
            </Link>
            <div className="post-details-info">
                <div className="post-details-info-label">Topic : </div>
                {post.topic?.name}
            </div>
            <div className="post-details-info">
                <div className="post-details-info-label">Date : </div>
                {post.date}
            </div>
            <div className="post-body">
                {post.body}
            </div>
            <div className="post-details-info">
                <div className="post-details-info-label"> # of Likes : </div>
                {post.likes?.length}
            </div>
            <footer className="post-footer">
                <div className="btn-container">
                    {parseInt(currentUser.id) === parseInt(post.userId) ? (
                        <button
                            className="btn btn-edit"
                            onClick={() => {
                                navigate("edit")
                            }}
                        >
                            Edit
                        </button>
                    ) : ("")}

                    {parseInt(currentUser.id) !== parseInt(post.userId) ? (
                        <button
                            className="btn btn-like"
                            onClick={() => {
                                handleLikeToggle()
                            }}
                        >
                            {currentUserLikesThisPost ? "Unlike" : "Like"}
                        </button>
                    ) : ("")}
                </div>
            </footer>
        </section>
    )
}