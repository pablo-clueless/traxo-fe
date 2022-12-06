import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'

import {About, Contact, Home, Profile, Signup} from './pages'
import {Footer, Loader, Navbar} from './components'

const App = () => {
  const currentMode:string = 'dark'

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
    </div>
  )
}

export default App