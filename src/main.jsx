import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import "./main.css"
import GlobalAppContext from './components/globalContext/GlobalAppContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalAppContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GlobalAppContext>
)
