import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

import {useAppSelector} from '../../hooks'
import {traxo_large} from '../../assets'
import avatar from '../../assets/images/avatar.jpg'

const Navbar = () => {
  const { isLoggedIn, user } = useAppSelector(store => store.auth)

  return (
    <div className='w-full flex items-center justify-between py-4 px-8 sticky top-0 left-0'>
      <div className='flex flex-col items-center text-center'>
        <div className='w-24'>
          <img src={traxo_large} alt="traxo logo" className='w-full object-cover' />
          <p className='text-[10px] text-secondary font-light'>Traxo Finances</p>
        </div>
      </div>
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