import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Allrooms from './pages/Allrooms.jsx'
import Footer from './components/Footer.jsx'
import Roomdetails from './pages/Roomdetails.jsx'
import Mybookings from './pages/Mybookings.jsx'
import Experiences from './pages/Experiences.jsx'
import About from './pages/About.jsx'

import { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'


const App = () => {

  const isOwner = useLocation().pathname.includes("/owner")
  return (
    <div>

      {!isOwner && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allrooms' element={<Allrooms />} />
        <Route path='/room/:id' element={<Roomdetails />} />
        <Route path='/my-bookings' element={<Mybookings />} />
        <Route path='/Experiences' element={<Experiences />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App