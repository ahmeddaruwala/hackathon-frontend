import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Signup from './pages/Signup.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     

     <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
