import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './components/router'
import ResponsiveAppBar from './components/ResponsiveAppBar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ResponsiveAppBar/>
      <Router />
    </>
  )
}

export default App
