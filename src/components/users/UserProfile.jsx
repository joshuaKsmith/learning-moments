import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../../services/userService"
import { getPostsByUserId } from "../../services/PostService"


export const UserProfile = ({ currentUser }) => {

    const { userId } = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getUserById(userId).then((userObject) => {
            setUser(userObject)
        })
        getPostsByUserId(userId).then((postsArray) => {
            setPosts(postsArray)
        })
    }, [])

    return (
        <div className="user-profile">
            <section className="user-name"> 
                {user.name}
            </section>
            <section className="user-cohort">
                Cohort #{user.cohort}
            </section>
            <section className="user-post-count">
                User Post Count : 
                <div>
                    {posts.length}
                </div>
            </section>
            { userId == currentUser.id ? (
                <button
                
                >
                    Edit
                </button>
            ) : ("")}

            
        </div>
    )
}