import './App.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  })

  return (
    <>
      <h1>Jokes API</h1>
      <h3>Number of Jokes : {jokes.length}</h3>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h4>{joke.title}</h4>
            <p>{joke.content}</p>
          </div>
      ))}
    </>
  )
}

export default App
