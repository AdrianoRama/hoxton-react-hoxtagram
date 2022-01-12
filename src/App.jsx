import { useEffect, useState } from 'react'
import './App.css'
import Logo from './Components/Logo'
import Posts from './Components/Posts'

function App() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/images`).then(resp => resp.json())
      .then(postsFromServer => setPost(postsFromServer))
  }, [])

  function plusLikes(post) {
    const updatedImages = JSON.parse(JSON.stringify(posts))
    const match = updatedImages.find(target => target.id === post.id)
    match.likes++
    setPost(updatedImages)

    return fetch(`http://localhost:8000/images/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post.likes + 1)
    })
  }

  return (
    <div className="App">
      <Logo />
      <section className="image-container">
        <Posts posts={posts} plusLikes={plusLikes} />

      </section>


    </div>
  )
}

export default App
