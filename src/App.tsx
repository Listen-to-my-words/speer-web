import React from 'react'
import './App.css' // eslint-disable-next-line
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Game from './pages/Game'
import Auth from './service/auth'
import RootLayout from './layouts/RootLayout'
import MyPage from './pages/MyPage'
import Database from './service/database'

function App({ auth, database }: { auth: Auth; database: Database }) {
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
            <Game auth={auth} database={database} />
          </RootLayout>
        }
      />
      <Route
        path={'/my-page'}
        element={
          <RootLayout auth={auth}>
            <MyPage auth={auth} database={database} />
          </RootLayout>
        }
      />
      <Route path={'*'} element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
