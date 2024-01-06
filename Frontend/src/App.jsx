import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
  <div>
    <h1>Fullstack</h1>
    <p>Data Length: {count.length}</p>

    {
      count?.map((value, key)=>(
        <div key={key}>
          <h3>{value.name}</h3>
          <p>{value.id}</p>
        </div>
      ))
    }
  </div>
    </>
  )
}

export default App
