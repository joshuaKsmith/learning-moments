import "./NavBar.css"

export const NavBar = () => {

    return (
        <div className="nav-bar">
            <div className="all-posts-nav">
                <button
                    className="all-posts-nav-btn"
                >
                    All Posts
                </button>
            </div>
            <div className="my-posts-nav">
                <button
                    className="my-posts-nav-btn"
                >
                    My Posts
                </button>
            </div>
            <div className="favorites-nav">
                <button
                    className="favorites-nav-btn"
                >
                    Favorites
                </button>
            </div>
            <div className="new-post-nav">
                <button
                    className="new-post-nav-btn"
                >
                    New Post
                </button>
            </div>
            <div className="profile-nav">
                <button
                    className="profile-nav-btn"
                >
                    Profile
                </button>
            </div>
            <div className="logout-nav">
                <button
                    className="logout-nav-btn"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}