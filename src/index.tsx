import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' // eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from './components/MuiThemeProvider'
import Auth from './service/auth'

const auth = new Auth()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <App auth={auth} />
    </BrowserRouter>
  </MuiThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
