import React, { FormEvent, MouseEvent } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { GrFacebook, GrGoogle } from 'react-icons/gr'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'

import { loginUser } from '../../services/auth'
import { useAppContext, useFormInputs } from '../../hooks'
import { Backdrop, Button, InputField, Spinner } from '../'

const clientId = import.meta.env.VITE_CLIENT_ID as string
const initialState = { email: '', password: '' }

const Login = () => {
    const { handleUnclicked } = useAppContext()
    const {inputs, handleChange, reset} = useFormInputs(initialState)
    const queryClient = useQueryClient()
    const { isLoading, mutate } = useMutation(loginUser, {
        onSuccess: (data) => console.log(data),
        onError: (error: any) => {
            const { response: { data: { message }} } = error
            toast.error(message)
        },
        onSettled: () => queryClient.invalidateQueries('login')
    })

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        mutate(inputs)
    }

  return (
    <Backdrop onClose={() => handleUnclicked('login')}>
        <div onClick={(e: MouseEvent) => e.stopPropagation()} className='w-4/5 max-w-[600px] bg-white rounded-[4px]'>
            <div className='w-full h-full flex flex-col items-center py-5 px-3'>
                <p className='font-semibold text-2xl text-primary'>Welcome Back</p>
                <form onSubmit={handleSubmit} className='w-4/5 flex flex-col gap-4 px-4 mt-12'>
                    <InputField label='Email' type='text' element='input' name='email' onChange={handleChange} placeholder='someone@example.com' />
                    <InputField label='Password' type='password' element='input' name='password' onChange={handleChange} placeholder='********' />
                    <Button label={isLoading ? <Spinner /> : 'Submit'} type='submit' />
                </form>
                <div className='w-[70%] flex flex-col mt-10 gap-5'>
                    <Button label={<><GrGoogle />Signin with Google</>} type='button' onClick={() => {}} className='bg-white border border-primary text-primary' />
                    <Button label={<><GrFacebook />Signin with Facebook</>} type='button' onClick={() => {}} className='bg-white border border-primary text-primary' />                 
                </div>
            </div>
        </div>
    </Backdrop>
  )
}

export default Login