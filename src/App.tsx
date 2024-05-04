import React from 'react'
import './App.css' // eslint-disable-next-line
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
