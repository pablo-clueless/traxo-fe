
export interface LoginCredentials {
    email: string
    password: string
}

export interface SignupCredentials {
    companyEmail: string
    companyName: string
    email: string
    firstName: string
    lastName: string
    password: string
}

export interface EmployeeCredentials {
    firstName: string
    lastName: string
    email: string
    designation: string
    image: File | ArrayBuffer | null
}