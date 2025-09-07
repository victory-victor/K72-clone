import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/agence' element={<Agence />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  )
}

export default App
