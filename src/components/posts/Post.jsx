

export const Post = ({ post }) => {
    return (
        <div className="post">
        <div className="post-info">
            <div className="post-title">
                <div>Title</div>
                <div>{post.title}</div>
            </div>
            <div className="post-topic">
                <div>Topic</div>
                <div>{post.topic.name}</div>
            </div>
        </div>
        <div className="likes-counter">
            <div># of Likes:</div>
            <div>
                
            </div>
        </div>
    </div>
    )
}