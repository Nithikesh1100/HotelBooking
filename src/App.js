import React from 'react'
import Nav from './components/Nav'
import { Route,Routes } from'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Hotels from './components/Hotels'
import Footer from './components/Footer'
import HotelInfo from './components/HotelInfo'
import Signin from './components/SignIn'
import Signup from './components/SignUp'

import Cancel from './components/Cancel'
import Success from './components/Success'


const App = () => {
  return (

    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/hotelinfo/:id" element={<HotelInfo/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App