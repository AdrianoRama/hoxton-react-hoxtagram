import Post from './Post'
import './Post.css'





function Posts(props) {

    const posts = props.posts

    return posts.map((post) => {
        return <Post post={post} />
    })


}

export default Posts