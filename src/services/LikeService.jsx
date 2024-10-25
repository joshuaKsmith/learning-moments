export const getLikesByPostId = (id) => {
    return fetch(`http://localhost:8088/likes?postId=${id}`).then((res) => res.json())
}

export const addLikeEntry = (like) => {
    return fetch(`http://localhost:8088/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(like)
    })
}

export const removeLikeEntryById = (id) => {
    return fetch(`http://localhost:8088/likes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}