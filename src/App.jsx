import React, { useState } from 'react'
import './App.css'
import Eightball from './EightBall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Eightball />
    </div>
  )
}

export default App
