import { ChangeEvent, FocusEvent, MouseEvent, ReactNode } from "react"

export interface InputProps {
    label: string | JSX.Element
    type: string
    name: string
    value?: string | number
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    element: string
    data?: Array<SelectOption>
    placeholder?: string
    rows?: number
    errorText?: string
    required?: boolean
    initialValue?: string
    initialValid?: boolean
}

export interface SelectOption {
    value: string | number
    name: string
}

export interface ButtonProps {
    label: string | ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: (e: MouseEvent) => void
    to?: string
    className?: string
}