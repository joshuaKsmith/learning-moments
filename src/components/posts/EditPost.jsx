import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllTopics } from "../../services/TopicService"
import { getPostById, storeEditedPostSubmission } from "../../services/PostService"


export const EditPost = ({ currentUser }) => {
    const [allTopics, setAllTopics] = useState([])
    const [currentPost, setCurrentPost] = useState({})
    const [selectedTopicId, setSelectedTopicId] = useState(0)
    const [bodyEntry, setBodyEntry] = useState("")
    const [titleEntry, setTitleEntry] = useState("")

    const { postId } = useParams()

    const navigate = useNavigate()

    const handlePostSubmission = () => {
        const editedPost = {
            "id": postId,
            "title": titleEntry,
            "body": bodyEntry,
            "date": new Date(),
            "topicId": parseInt(selectedTopicId),
            "userId": currentUser.id
        }
        storeEditedPostSubmission(editedPost).then(() => {
            navigate("../../my_posts")
        })
    }

    useEffect(() => {
        getAllTopics().then((topicArray) => {
            setAllTopics(topicArray)
        })
        getPostById(postId).then((data) => {
            const postObject = data[0]
            setCurrentPost(postObject)
            setSelectedTopicId(postObject.topicId)
            setBodyEntry(postObject.body)
            setTitleEntry(postObject.title)
        })
    }, [])

    return (
        <section className="new-post">
            <select 
                className="new-post-topic"
                name="new-post-topic"
                value={currentPost.topicId}
                onChange={(event) => {
                    setSelectedTopicId(event.target.value)
                }}
            >
                <option key={0} value={0}>Topic</option>
                {allTopics.map((topic) => {
                    return (
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )
                })}
            </select>
            <div className="new-post-panel">
                <div className="new-post-title">
                    <span className="new-post-title-label">Post Title : </span>
                    <input
                        className="new-post-title-field"
                        name="new-post-title-field"
                        type="text"
                        defaultValue={currentPost.title}
                        onChange={(event) => {
                            setTitleEntry(event.target.value)
                        }}
                    />
                </div>
                <div className="new-post-body">
                    <div className="new-post-body-label">Post Body : </div>
                    <input
                        className="new-post-body-field"
                        name="new-post-body-field"
                        type="text"
                        defaultValue={currentPost.body}
                        onChange={(event) => {
                            setBodyEntry(event.target.value)
                        }}
                    />
                </div>
            </div>
            <button 
                className="new-post-btn"
                onClick={() => {
                    handlePostSubmission()
                }}
            >
                Submit
            </button>
        </section>
    )
}