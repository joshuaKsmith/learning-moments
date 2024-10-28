export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts?_expand=user&_expand=topic`).then((res) => res.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=topic&_expand=user&_embed=likes`).then((res) => res.json())
}

export const storeNewPostSubmission = (post) => {
    return fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}

export const getPostsByUserId = (id) => {
    return fetch(`http://localhost:8088/posts?userId=${id}`).then((res) => res.json())
}

export const deletePostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}