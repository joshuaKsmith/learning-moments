import { useEffect, useState } from "react"
import "./AllPosts.css"
import { getAllPosts } from "../../services/PostService.jsx"
import { getAllTopics } from "../../services/TopicService.jsx"
import { Post } from "./Post.jsx"
import { PostFilterBar } from "./PostFilterBar.jsx"


export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [selectedTopicId, setSelectedTopicId] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getAllPosts().then((postArray) => {
            setAllPosts(postArray)
        })
        getAllTopics().then((topicArray) => {
            setAllTopics(topicArray)
        })
    }, [])

    useEffect(() => {
        if (parseInt(selectedTopicId)) {
            const selectedPosts = allPosts.filter((post) => 
                post.topicId === parseInt(selectedTopicId) && post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredPosts(selectedPosts)
        } else {
            const selectedPosts = allPosts.filter((post) => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredPosts(selectedPosts)
        }
    }, [selectedTopicId, allPosts, searchTerm])

    // useEffect(() => {
    //     const foundPosts = allPosts.filter((post) =>
    //         post.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     setFilteredPosts(foundPosts)
    // }, [searchTerm, allPosts])


    return (
        <div className="all-posts">
            <PostFilterBar allTopics={allTopics} setSelectedTopicId={setSelectedTopicId} setSearchTerm={setSearchTerm} />
            <div className="posts">
                {filteredPosts.map((postObject) => {
                    return (
                        <Post post={postObject} key={postObject.id}/>
                    )
                })}
            </div>
        </div>
    )
}