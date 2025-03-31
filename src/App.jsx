import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NewRivals from './pages/NewRivals'
import Products from './pages/Products'

function App() {
  return (
    <div>

      {/* Router Syntax
    import { Routes, Route } from "react-router-dom";
    <Routes>
      <Route path="route-path" element={<Component />} />
    </Routes>
      */}
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rival" element={<NewRivals/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
