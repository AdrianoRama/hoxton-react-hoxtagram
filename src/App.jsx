import { useState } from 'react'
import './App.css'
import Logo from './Components/Logo'
import Post from './Components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo />


      <section className="image-container">


        <Post />
      </section>
    </div>
  )
}

export default App
