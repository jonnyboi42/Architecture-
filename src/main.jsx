import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Home/home.css'
import './components/Header/header.css'
import './components/About/about.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
