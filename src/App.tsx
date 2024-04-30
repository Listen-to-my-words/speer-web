import React from 'react'
import './App.css' // eslint-disable-next-line
import { Route, Routes } from 'react-router-dom'
import Hello from './components/Hello'
import Root from './pages/Root'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Root />} />
      <Route path={'/hello'} element={<Hello />} />
      <Route path={'/signIn'} element={<SignIn />} />
      <Route path={'*'} element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
