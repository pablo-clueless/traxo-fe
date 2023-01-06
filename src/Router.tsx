import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About, Contact, Dashboard, Home, Profile, Signup } from './pages'
import { AuthRoutes } from 'components'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />

        {/* proctected routes */}
        <Route element={<AuthRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<Profile />} />
        </Route>
    </Routes>
  )
}

export default Router