import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

import { useAppSelector } from '../../hooks'
import { traxo_dark } from '../../assets'
import avatar from '../../assets/images/avatar.jpg'
import { Button } from '../'
import { useAppContext } from '../../hooks'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.auth)
  const { handleClicked } = useAppContext()
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleScroll = () => {
    const offset = window.scrollY
    offset > 700 ? setScrolled(true) : setScrolled(false)
  }

  return (
    <nav className={`w-full flex items-center justify-between py-4 px-8 top-0 left-0 ${scrolled ? 'fixed' : 'sticky'}`}>
      <Link to='/' className='w-24'>
        <img src={traxo_dark} alt="traxo logo" className='w-full object-cover' />
      </Link>
      <div>
        {!isLoggedIn ? (
          <div className='flex items-center gap-4'>
            <Button label='Sign In' type='button' onClick={() => handleClicked('login')} />
            <Button label='Sign Up' to='/signup' />
          </div>
        ) : (
          <div>
            <div className='w-12 h-12 rounded-full border border-secondary cursor-pointer'>
              <img src={avatar} alt={user?.firstName} className='w-full h-full object-contain rounded-full' />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar