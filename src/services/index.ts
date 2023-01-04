import axios from 'axios'
import { LoginCredentials, SignupCredentials } from 'interfaces/auth'

const baseUrl = import.meta.env.VITE_SERVER_URI as string

export const loginUser = async (credentials: LoginCredentials) => {
 const { data: response } = await axios.post(
  `${baseUrl}/auth/signin`,
  credentials
 )
 return response?.data
}

export const createUser = async (credentials: SignupCredentials) => {
 const { data: response } = await axios.post(
  `${baseUrl}/auth/signup`,
  credentials
 )
 return response?.data
}

export const getUser = async (id: string) => {
 const { data: response } = await axios.get(`${baseUrl}/users/${id}`)
 return response?.data
}
