import React, { ChangeEvent, FormEvent, MouseEvent } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { GrFacebook, GrGoogle } from 'react-icons/gr'

import { useAppContext, useHttpRequest } from '../../hooks'
import { Backdrop, Button, InputField, Loader } from '../'

const baseUrl = import.meta.env.VITE_SERVER_URI as string
const clientId = import.meta.env.VITE_CLIENT_ID as string

const Login = () => {
    const { error, loading, sendRequest } = useHttpRequest()
    const { handleUnlicked } = useAppContext()

    const handleChange = (e: ChangeEvent)=> {}

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        const headers = { 'Content-Type': 'application/json' }
        const payload = {}
        try {
            const data = await sendRequest(`${baseUrl}/auth/signin`, 'POST', JSON.stringify(payload), headers)
            if(!data || data === undefined) return
            console.log(data)
        } catch (error) {}
    }

    const googleAuth = useGoogleLogin({
        onSuccess: async(response) => {
            const { access_token } = response
            const headers = { 'Content-Type': 'application/json' }
            const payload = { token: access_token }
            try {
                const data = await sendRequest(`${baseUrl}/auth/google-auth`, 'POST', JSON.stringify(payload), headers)
                if(!data || data === undefined) return
                console.log(data)
            } catch (error) {}
        },
        onError: (response: any) => console.log(response),
    })

    if(loading) return <Loader />

  return (
    <Backdrop onClose={() => handleUnlicked('login')}>
        <div onClick={(e: MouseEvent) => e.stopPropagation()} className='w-4/5 max-w-[600px] bg-white rounded-[4px]'>
            <div className='w-full h-full flex flex-col items-center py-5 px-3'>
                <p className='font-semibold text-2xl text-primary'>Welcome Back</p>
                <form onSubmit={handleSubmit} className='w-4/5 flex flex-col gap-4 px-4 mt-12'>
                    <InputField label='Email' type='text' element='input' name='email' onChange={handleChange} placeholder='someone@example.com' />
                    <InputField label='Password' type='password' element='input' name='password' onChange={handleChange} placeholder='********' />
                    <Button label='Submit' type='submit' />
                </form>
                <div className='w-[70%] flex flex-col mt-10 gap-5'>
                    <Button label={<><GrGoogle />Signin with Google</>} type='button' onClick={() => googleAuth()} className='bg-white border border-primary text-primary' />
                    <Button label={<><GrFacebook />Signin with Facebook</>} type='button' onClick={() => {}} className='bg-white border border-primary text-primary' />                    
                </div>
            </div>
        </div>
    </Backdrop>
  )
}

export default Login