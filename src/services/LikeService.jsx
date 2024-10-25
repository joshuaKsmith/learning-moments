export const getLikesByPostId = (id) => {
    return fetch(`http://localhost:8088/likes?postId=${id}`).then((res) => res.json())
}