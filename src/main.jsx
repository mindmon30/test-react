import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/HomePage'
import About from './page/About'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './page/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
