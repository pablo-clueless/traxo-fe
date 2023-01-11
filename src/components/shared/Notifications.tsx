import React from 'react'
import { FiX } from 'react-icons/fi'
import { HiEnvelope, HiEnvelopeOpen } from 'react-icons/hi2'

import { useAppContext, useAppDispatch, useAppSelector } from 'hooks'
import { read } from 'store/slices/notification'
import { IconButton } from 'components'

const Notifications = () => {
  const { notifications } = useAppSelector(store => store.notification)
  const { handleUnclicked } = useAppContext()
  const dispatch = useAppDispatch()

  return (
    <div className='w-[300px] max-w-[75%] h-[400px] flex flex-col rounded-md bg-white absolute top-16 right-6 md:right-10'>
      <div className='w-full flex items-center justify-between bg-black text-white text-xl font-medium leading-3 px-2 py-4 rounded-t-md'>
        <p>Notifications</p>
        <IconButton icon={<FiX />} onClick={() => handleUnclicked('notifications')} />
      </div>
      <div className='w-full h-[340px] flex flex-col gap-2 p-2 overflow-y-scroll'>
        {notifications.map((notification) => (
          <div key={notification.id} onClick={() => dispatch(read(notification.id))} className='w-full flex flex-col p-1 border cursor-pointer'>
            <div className='w-full flex items-center justify-between'>
              <div className='w-[80%]'>
                <p className=''>{notification.message}</p>
                <p className='text-[8px] text-gray-500'>{new Date(notification.date).toLocaleDateString()}</p>
              </div>
              <div>
                {notification.isRead ? (
                  <HiEnvelopeOpen className='fill-gray-500' />
                ):(
                  <HiEnvelope className='fill-black' />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications