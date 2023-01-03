import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { About, Contact, Home, Profile, Signup } from './pages'
import { Footer, Loader, Login, Navbar } from './components'
import { useAppContext } from './hooks'

const App = () => {
  const { currentMode, isClicked } = useAppContext()

  return (
    <div className={`w-screen ${currentMode === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />

          {/* proctected routes */}
          <Route path='/user' element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />

      {isClicked.login && <Login />}
    </div>
  )
}

export default App