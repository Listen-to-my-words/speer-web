import React from 'react'
import './App.css' // eslint-disable-next-line
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Game from './pages/Game'
import Auth from './service/auth'
import RootLayout from './layouts/RootLayout'
import MyPage from './pages/MyPage'

function App({ auth }: { auth: Auth }) {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <RootLayout auth={auth}>
            <Root />
          </RootLayout>
        }
      />
      <Route
        path={'/game/:week/:level'}
        element={
          <RootLayout auth={auth}>
            <Game />
          </RootLayout>
        }
      />
      <Route
        path={'/my-page'}
        element={
          <RootLayout auth={auth}>
            <MyPage />
          </RootLayout>
        }
      />
      <Route path={'*'} element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
