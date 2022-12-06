import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

import {useAppSelector} from '../../hooks'
import {traxo_dark} from '../../assets'
import avatar from '../../assets/images/avatar.jpg'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.auth)

  return (
    <div className='w-full flex items-center justify-between py-4 px-8 sticky top-0 left-0'>
      <Link to='/' className='w-24'>
        <img src={traxo_dark} alt="traxo logo" className='w-full object-cover' />
      </Link>
      <div>
        {!isLoggedIn ? (
          <div className='flex items-center gap-4'>
            <Link to='/signup'>
              sign up
            </Link>
          </div>
        ) : (
          <div>
            <div className='w-12 h-12 rounded-full border border-secondary cursor-pointer'>
              <img src={avatar} alt={user?.firstName} className='w-full h-full object-contain rounded-full' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar