import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/TopicService"
import { storeNewPostSubmission } from "../../services/PostService"


export const NewPost = ({ currentUser }) => {
    const [allTopics, setAllTopics] = useState([])
    const [selectedTopicId, setSelectedTopicId] = useState(0)
    const [titleEntry, setTitleEntry] = useState("")
    const [bodyEntry, setBodyEntry] = useState("")

    useEffect(() => {
        getAllTopics().then((topicArray) => {
            setAllTopics(topicArray)
        })
    }, [])

    const handleNewPost = () => {
        const newPost = {
            "title": titleEntry,
            "body": bodyEntry,
            "date": new Date(),
            "topicId": parseInt(selectedTopicId),
            "userId": currentUser.id
        }
        storeNewPostSubmission(newPost).then(() => {

        })
    }

    return (
        <section className="new-post">
            <select 
                className="new-post-topic"
                name="new-post-topic"
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
            <div className="new-post-title">
                <span className="new-post-title-label">New Post Title : </span>
                <input
                    className="new-post-title-field"
                    name="new-post-title-field"
                    type="text"
                    onChange={(event) => {
                        setTitleEntry(event.target.value)
                    }}
                />
            </div>
            <div className="new-post-body">
                <div className="new-post-body-label">New Post Body : </div>
                <input
                    className="new-post-body-field"
                    name="new-post-body-field"
                    type="text"
                    onChange={(event) => {
                        setBodyEntry(event.target.value)
                    }}
                />
            </div>
            <button 
                className="new-post-btn"
                onClick={() => {
                    handleNewPost()
                }}
                disabled={selectedTopicId > 0 && titleEntry.length > 0 && bodyEntry.length > 0 ? "" : "disabled"}
            >
                Submit
            </button>
        </section>
    )
}