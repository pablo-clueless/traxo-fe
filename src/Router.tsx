import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About, Contact, Home, Profile, Signup } from './pages'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />

        {/* proctected routes */}
        <Route path='/user' element={<Profile />} />
    </Routes>
  )
}

export default Router