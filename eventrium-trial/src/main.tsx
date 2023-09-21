import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

ReactDOM.createRoot(document.getElementById('header')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
