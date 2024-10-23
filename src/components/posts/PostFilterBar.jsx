

export const PostFilterBar = ({ allTopics, setSelectedTopicId, setSearchTerm }) => {
    return (
        <div className="filter-bar">
            <select 
                className="topic-select"
                onChange={(event) => {
                    setSelectedTopicId(event.target.value)
                }}
            >
                <option key={0} value={0}>All</option>
                {allTopics.map((topic) => {
                    return (
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )
                })}
            </select>
            <input 
                className="title-search"
                name="title-search"
                type="text"
                placeholder="Search Title..."
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
        </div>
    )
}