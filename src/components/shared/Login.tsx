import { FormEvent, MouseEvent, useEffect } from 'react'
import { GrFacebook, GrGoogle } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'

import { useAppContext, useAppDispatch, useFormInputs, useHttpRequest } from 'hooks'
import { login } from 'store/slices/auth'
import InputField from './InputField'
import Backdrop from './Backdrop'
import Spinner from './Spinner'
import Button from './Button'

const baseUrl = import.meta.env.VITE_SERVER_URI as string
const clientId = import.meta.env.VITE_CLIENT_ID as string
const initialState = { email: '', password: '' }

const Login = () => {
    const {inputs, handleChange, reset} = useFormInputs(initialState)
    const {error, loading, sendRequest} = useHttpRequest()
    const { handleUnclicked } = useAppContext()
    const dispatch = useAppDispatch()
    const cookies = new Cookies()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const data = await sendRequest(`${baseUrl}/auth/signin`, 'POST', JSON.stringify(inputs), headers)
            if(!data || data === undefined) return
            const { token, user } = data
            dispatch(login(user))
            cookies.set('token', token)
            handleUnclicked('login')
            navigate('/dashboard')
        } catch (error) {}
    }

    useEffect(() => {
        error && toast.error(`${error}`)
    },[error])

    return (
    <Backdrop onClose={() => handleUnclicked('login')}>
    <div
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className="w-4/5 max-w-[600px] bg-white rounded-[4px]">
        <div className="w-full h-full flex flex-col items-center py-5 px-3">
        <p className="font-semibold text-2xl text-primary">Welcome Back</p>
        <form
        onSubmit={handleSubmit}
        className="w-4/5 flex flex-col gap-4 px-4 mt-12">
        <InputField
        label="Email"
        type="text"
        element="input"
        name="email"
        onChange={handleChange}
        placeholder="someone@example.com"
        />
        <InputField
        label="Password"
        type="password"
        element="input"
        name="password"
        onChange={handleChange}
        placeholder="********"
        />
        <Button label={loading ? <Spinner /> : 'Submit'} type="submit" />
        </form>
        <div className="w-[70%] flex flex-col mt-10 gap-5">
        <Button
        label={
            <>
            <GrGoogle />
            Signin with Google
            </>
        }
        type="button"
        onClick={() => {}}
        className="bg-white border border-primary text-primary"
        />
        <Button
        label={
            <>
            <GrFacebook />
            Signin with Facebook
            </>
        }
        type="button"
        onClick={() => {}}
        className="bg-white border border-primary text-primary"
        />
        </div>
        </div>
    </div>
    </Backdrop>
 )
}

export default Login
