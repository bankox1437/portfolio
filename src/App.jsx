import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Content />
      </div>
    </>
  )
}

export default App
