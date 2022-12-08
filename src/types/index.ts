

export type User = {
    userId: string
    firstName: string
    lastName: string
    email: string
    userImage: string
    companyId: string
    companyName: string
    companyImage: string
    accessType: string
}

export type Employee = {
    userId: string
    firstName: string
    lastName: string
    email: string
    userImage: string
    subscriptions: Array<Subscriptions>
}

export type Company = {
    companyId: string
    companyName: string
    companyImage: string
    users: Array<User>
    numberOfEmployees: number
    employeeList: Array<Employee>
    budgets: Array<Budget>
    subscriptions: Array<Subscriptions>
}

export type Budget = {
    budgetId: string
    name: string
    type: string
    spendLimit: number
    policy: Policy
}

export type Subscriptions = {
    subscriptionId: string
    name: string
    addeBy: User
    policy: Policy
}

export type Card = {
    cardId: string
    name: string
    issuedBy: User
    carrier: Employee
    budget: string
    spendLimit: number
    policy: Policy
}

export type Policy = {
    policy: 'strict' | 'flexible' | 'fixed'
}
