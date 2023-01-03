import React, { Children } from 'react'

interface Props {
    onClose: () => void
    children: React.ReactNode
}

const Backdrop:React.FC<Props> = ({children, onClose}) => {
  return (
    <div onClick={() => onClose()} className='w-screen h-screen grid place-items-center fixed top-0 left-0 bg-gray-300 bg-opacity-50 z-[1000]'>
        {children}
    </div>
  )
}

export default Backdrop