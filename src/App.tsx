import React, { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";

import { Footer, Loader, Login, Navbar } from './components'
import { useAppContext } from './hooks'
import Router from './Router'

const App = () => {
  const { currentMode, isClicked } = useAppContext()

  return (
    <div className={`w-screen ${currentMode === 'dark' ? 'dark' : ''}`}>
      <ToastContainer />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
      <Footer />
      {isClicked.login && <Login />}
    </div>
  )
}

export default App