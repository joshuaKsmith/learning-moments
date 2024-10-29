import { Link } from "react-router-dom"
import "./MyPosts.css"
import { useEffect, useState } from "react"
import { getLikesByUserId, removeLikeEntryById } from "../../services/LikeService"

export const Favorites = ({ currentUser }) => {

    const [myFavorites, setMyFavorites] = useState([])

    const handleReset = () => {
        getLikesByUserId(currentUser.id).then((likesArray) => {
            setMyFavorites(likesArray)
        })
    }

    const handleFavoriteRemoval = (likeId) => {
        removeLikeEntryById(likeId).then(() => {
            handleReset()
        })
    }

    useEffect(() => {
        handleReset()
    }, [currentUser])

    return (
        <div className="my-posts">
            {myFavorites.map((likeObject) => {
                return (
                    <div className="my-post" key={likeObject.post?.id}>
                        <Link to={`/posts/${likeObject.post?.id}`} key={likeObject.post?.id}>
                            <div className="my-post-title">
                                {likeObject.post?.title}
                            </div>
                        </Link>
                        <button 
                            className="my-post-delete"
                            name="my-post-delete"
                            value={likeObject.id}
                            onClick={(event) => {
                                handleFavoriteRemoval(parseInt(event.target.value))
                            }}
                        >
                            Remove
                        </button>
                    </div>
                )
            })}
        </div>
    )

}