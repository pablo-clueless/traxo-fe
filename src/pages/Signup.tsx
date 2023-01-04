import React, { FormEvent } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { GrFacebook, GrGoogle } from 'react-icons/gr'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useFormInputs } from '../hooks'
import { createUser } from '../services/auth'
import { Button, InputField, Spinner } from '../components'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirm_password: '' }

const Signup = () => {
  const {inputs, handleChange, reset} = useFormInputs(initialState)
  const { password, confirm_password } = inputs
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { isLoading, mutate } = useMutation(createUser, {
    onSuccess: (data) => console.log(data),
    onError: (error: any) => {
      const { response: { data: { message }} } = error
      toast.error(message)
    },
    onSettled: () => queryClient.invalidateQueries('create')
  })

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    if(password !== confirm_password) return toast.error('Passwords do not match!')
    mutate(inputs)
  }

  return (
    <div className='w-full grid place-items-center'>
      <div className='w-[400px] max-w-[80%] bg-white border rounded-md p-3 my-10'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4 my-5'>
          <InputField element='input' label='Firstname' name='firstName' onChange={handleChange} type='text' required />
          <InputField element='input' label='Lastname' name='lastName' onChange={handleChange} type='text' required />
          <InputField element='input' label='Email' name='email' onChange={handleChange} type='email' required />
          <InputField element='input' label='Password' name='password' onChange={handleChange} type='password' required />
          <InputField element='input' label='Confirm Password' name='confirm_password' onChange={handleChange} type='password' required />
          <Button label={isLoading ? <Spinner /> : 'Submit'} type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Signup