import React from 'react'
import './App.css' // eslint-disable-next-line
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Game from './pages/Game'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Root />} />
      <Route path={'/game/:week/:level'} element={<Game />} />
      <Route path={'*'} element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
