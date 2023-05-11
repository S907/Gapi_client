import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yout from './pages/Yout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      <Yout />
    </>
  )
}

export default App
