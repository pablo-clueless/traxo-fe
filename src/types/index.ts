

export type User = {
    accessType: string
    accountCreated: Date | string
    companyName: string
    createdAt: Date | string
    email: string
    firstName: string
    lastName: string
    updatedAt: Date | string
    userId: string
    _id: string
}

export type Employee = {
    email: string
    firstName: string
    lastName: string
    subscriptions: Array<Subscriptions>
    userId: string
    userImage: string
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
