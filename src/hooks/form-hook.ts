import {ChangeEvent, useReducer} from 'react'

export type Action = {
    type: string
    name: string
    value: string | number
}

export const useFormInputs = (initialState: any) => {
    const reducer = (state: typeof initialState, action: Action) => {
        switch(action.type) {
            case 'CHANGE':
                return {
                    ...state,
                    [action.name]: action.value
                }
            default:
                return state
        }
    }

    const [inputs, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        dispatch({type: 'CHANGE', name: e.target.name, value: e.target.value})
    }
    
    return {inputs, handleChange}
}