import "./NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <li className="navbar-item">
                <Link to="/posts">All Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/posts/my_posts">My Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/posts/favorites">Favorites</Link>
            </li>
            <li className="navbar-item">
                <Link to="/posts/new_post">New Post</Link>
            </li>
            {localStorage.getItem("learning_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("learning_user")
                            navigate("/login", { replace: true })
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : ("")}
        </div>
    )
}