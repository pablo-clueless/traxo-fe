import axios, { AxiosHeaders } from 'axios'
// import Cookies from 

import { EmployeeCredentials, LoginCredentials, SignupCredentials } from '../interfaces/auth'
import { Employee } from '../types'

const baseUrl = import.meta.env.VITE_SERVER_URI as string

export const loginUser = async(credentials: LoginCredentials) => {
    const { data: response } = await axios.post(`${baseUrl}/auth/signin`, credentials)
    return response?.data
}

export const createUser = async(credentials: SignupCredentials) => {
    const { data: response } = await axios.post(`${baseUrl}/auth/signup`, credentials)
    return response?.data
}

export const getUser = async(id: string) => {
    const { data: response } = await axios.get(`${baseUrl}/users/${id}`)
    return response?.data
}

export const addEmployee = async(credentials: Employee) => {
    const { data: response } = await axios.post(`${baseUrl}/employees/add`, credentials)
    return response?.data
}

export const getEmployee = async(id: string) => {
    const { data: response } = await axios.get(`${baseUrl}/employees/one/${id}`)
    return response?.data
}

export const getAllEmployee = async(headers: AxiosHeaders) => {
    const { data: response } = await axios.get(`${baseUrl}/employees/all`)
    return response?.data
}

export const updateEmployee = async(id: string, credentials: EmployeeCredentials) => {
    const { data: response } = await axios.patch(`${baseUrl}/employees/edit/${id}`, credentials)
    return response?.data
}

export const removeEmployee = async(id: string) => {
    const { data: response } = await axios.delete(`${baseUrl}/employees/del/${id}`)
    return response?.data
}
