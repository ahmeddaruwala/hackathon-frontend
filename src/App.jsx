import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home.jsx"
import Loans from "./pages/Loans.jsx"
import Signup from './pages/Signup.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Banner from './components/Banner.jsx';
import Admin from './pages/Admin.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
     <Banner />
     <Navbar />
     

     <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/loans" element={<Loans />} />        
        <Route path="/contact" index element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
