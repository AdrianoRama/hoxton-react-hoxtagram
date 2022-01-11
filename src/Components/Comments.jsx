function Comments(props) {
    const comments = props.comments

    return comments.map((comment) => {
        return <li>{comment.content}</li>
    })
}

export default Comments