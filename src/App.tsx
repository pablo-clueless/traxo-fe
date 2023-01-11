import React, { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

import { Footer, Loader, Login, Navbar, Notifications } from 'components'
import { useAppContext, useAppDispatch } from 'hooks'
import { login } from 'store/slices/auth'
import Router from 'Router'

const App = () => {
  const { currentMode, isClicked } = useAppContext()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const json = localStorage.getItem('traxo-user')
    if(!json) return
    const user = JSON.parse(json)
    dispatch(login(user))
  },[])

  return (
    <div className={`w-screen ${currentMode === 'dark' ? 'dark relative' : 'relative'}`}>
      <ToastContainer />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
      <Footer />
      {isClicked.login && <Login />}
      {isClicked.notifications && <Notifications />}
    </div>
  )
}

export default App