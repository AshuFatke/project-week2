import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Welcome from './Pages/Welcome'
import Home from './Pages/Home/Home'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Card from './Pages/Cards/Card'
import Placeorder from './Pages/placeorder/Placeorder'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/Login/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
   <>
    {showLogin?<LoginPopup setShowLogin ={setShowLogin} />:<></>}
   <div className="app">
     <Navbar setShowLogin={setShowLogin}/>
   <Routes>
     <Route path="/" element={<Welcome />} /> 
    <Route path="/Login" element={<UserLogin/>} />
    <Route path="/Signup" element={<UserSignup/>} />
    <Route path="/Card" element={<Card/>} />
    <Route path="/order" element={<Placeorder/>} />
    <Route path="/Home" element={<Home/>} />
    
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/menu" element={<Menu/>} />

   </Routes>
   </div>
   

   <Footer/>
   
   </>
   
  )
}

export default App
