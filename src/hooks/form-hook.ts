import { ChangeEvent, useReducer } from 'react'

import { Validator } from '../libs/validators'

export type Action = {
    type: string
    name: string
    value: string | number
    validators?: Array<Validator>
}

export const useFormInputs = (initialState: any) => {
    const reducer = (state: typeof initialState, action: Action) => {
        switch(action.type) {
            case 'CHANGE':
                return {
                    ...state,
                    [action.name]: action.value
                }
            case 'RESET':
                return initialState
            default:
                return state
        }
    }

    const [inputs, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        dispatch({type: 'CHANGE', name: e.target.name, value: e.target.value})
    }

    const handleReset = () => dispatch({type: 'RESET', name: '', value: ''})
    
    return {inputs, handleChange, reset: handleReset}
}