import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Products from './Products.jsx'
import Contact from './Contact.jsx'
import Faq from './Faq.jsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='faq' element={<Faq />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
