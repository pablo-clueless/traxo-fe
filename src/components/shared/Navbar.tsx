import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiBell, FiUser } from 'react-icons/fi'

import { useAppContext, useAppSelector } from 'hooks'
import { traxo_dark } from 'assets'
import Button from './Button'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.auth)
  const { notifications } = useAppSelector(store => store.notification)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { handleClicked, isClicked } = useAppContext()
  const notificationLength = notifications.length

  const handleScroll = () => {
    const offset = window.scrollY
    offset > 700 ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <nav className={`w-full flex items-center justify-between py-4 px-8 top-0 left-0 ${scrolled ? 'fixed' : 'sticky'}`}>
      <Link to='/' className='w-24'>
        <img src={traxo_dark} alt="traxo logo" className='w-full object-cover' />
      </Link>
      <div></div>
      <div>
        {!isLoggedIn ? (
          <div className='flex items-center gap-4'>
            <Button label='Sign In' type='button' onClick={() => handleClicked('login')} />
            <Button label='Sign Up' to='/signup' />
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            <div onClick={() => handleClicked('notifications')} className='w-[34px] h-[34px] rounded-full p-2 cursor-pointer relative'>
              {notificationLength > 0 && (
                <div className='w-2 h-2 bg-primary rounded-full absolute top-2 right-2'></div>
              )}
              <FiBell className='text-lg' />
            </div>
            <div onClick={() => handleClicked('userMenu')} className='rounded-full p-2 border border-secondary cursor-pointer'>
              <FiUser className='text-xl' />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
