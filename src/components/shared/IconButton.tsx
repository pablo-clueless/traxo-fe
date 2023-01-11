import React from 'react'

interface Props {
    icon: JSX.Element
    onClick: () => void
}

const IconButton = ({icon, onClick}:Props) => {
  return (
    <div onClick={onClick} className='p-1 rounded-full bg-gray-300 text-black hover:bg-primary hover:text-white cursor-pointer'>
        {icon}
    </div>
  )
}

export default IconButton