import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/style.scss"
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./main.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><App /></BrowserRouter>
    
  </React.StrictMode>,
)
