import {ChangeEvent, FocusEvent} from "react"

export interface InputProps {
    label: string
    type: string
    name: string
    value?: string | number
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    element: string
    data?: Array<SelectOption>
    placeholder?: string
    rows?: number
    errorText?: string
}

export interface SelectOption {
    value: string | number
    name: string
}