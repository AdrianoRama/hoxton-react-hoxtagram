import Post from "./Post";



function Posts(props) {
    return <section className="image-container">
        <Post post={props.post} posts={props.posts} />

    </section>
}

export default Posts