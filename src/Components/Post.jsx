import Comments from "./Comments"

function Post(props) {

    const post = props.post

    return (<article className="image-card" key={post.id}>
        <h2 className="title">{post.title}</h2>
        <img src={post.image} className="image" />
        <div className="likes-section">
            <span className="likes">{post.likes} likes</span>
            <button className="like-button" onClick={() => props.plusLikes(post)}>♥</button>
        </div>
        <ul className="comments">
            <Comments comments={post.comments} plusLikes={props.plusLikes} />
        </ul>
    </article>)

}

export default Post