import React from 'react'
import Cookies from 'universal-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
    const cookies = new Cookies()
    let access = cookies.get('token')
    
  return (
    access ? <Outlet /> : <Navigate to='/' />
  )
}

export default AuthRoutes