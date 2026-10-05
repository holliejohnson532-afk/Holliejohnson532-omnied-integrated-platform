import { Routes, Route, Link } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Welcome to OmniEd Integrated Platform</h1>
      <p>This is the home page.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <SpeedInsights />
    </div>
  )
}

export default App
