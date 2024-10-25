export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts?_expand=user&_expand=topic`).then((res) => res.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=topic&_expand=user&_embed=likes`).then((res) => res.json())
}