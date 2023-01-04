import React from 'react'
import { Link } from 'react-router-dom'

import { ButtonProps } from '../../interfaces'

const Button:React.FC<ButtonProps> = ({label, type, onClick, to, className}) => {

  if(to) {
    return (
      <Link to={to} className={`min-w-[100px] min-h-[40px] flex items-center justify-center gap-1 bg-primary text-white py-2 rounded-[4px] ${className}`}>
        {label}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`min-w-[100px] min-h-[40px] flex items-center justify-center gap-1 bg-primary text-white py-2 rounded-[4px] ${className}`}>
      {label}
    </button>
  )
}

export default Button