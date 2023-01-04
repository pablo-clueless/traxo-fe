
export interface LoginCredentials {
    email: string
    password: string
}

export interface SignupCredentials {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface EmployeeCredentials {
    firstName: string
    lastName: string
    email: string
    designation: string
    image: File | ArrayBuffer | null
}