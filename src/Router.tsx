import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'

import { About, Contact, Dashboard, Documentation, Home, Products, Profile, Resources, Signup } from './pages'
import { AuthRoutes } from 'components'

const measurementId = import.meta.env.VITE_GA_ID as string
ReactGA.initialize(measurementId)

const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<Products />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/documentation' element={<Documentation />} />

      {/* proctected routes */}
      <Route element={<AuthRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Router