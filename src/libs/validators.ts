const VALIDATOR_TYPE_REQUIRE = 'REQUIRE'
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH'
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH'
const VALIDATOR_TYPE_MIN = 'MIN'
const VALIDATOR_TYPE_MAX = 'MAX'
const VALIDATOR_TYPE_EMAIL = 'EMAIL'
const VALIDATOR_TYPE_FILE = 'FILE'

export type Validator = {
    type: string
    val: number
}

export const VALIDATOR_REQUIRE = () => ({type: VALIDATOR_TYPE_REQUIRE})
export const VALIDATOR_FILE = () => ({type: VALIDATOR_TYPE_FILE})
export const VALIDATOR_MINLENGTH = (val: number) => ({type: VALIDATOR_TYPE_MINLENGTH, val: val})
export const VALIDATOR_MAXLENGTH = (val: number) => ({type: VALIDATOR_TYPE_MAXLENGTH, val: val})
export const VALIDATOR_MIN = (val: number) => ({ type: VALIDATOR_TYPE_MIN, val: val})
export const VALIDATOR_MAX = (val: number) => ({ type: VALIDATOR_TYPE_MAX, val: val})
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL})

export const validate = (value: any, validators?: Array<Validator>) => {
    let isValid:boolean = true
    if(!validators) return
    for(const validator of validators) {
        if(validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
            isValid = isValid && value.trim().length >= validator.val
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
            isValid = isValid && value.trim().length <= validator.val
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
        isValid = isValid && +value >= validator.val
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
        isValid = isValid && +value <= validator.val
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
        isValid = isValid && /^[a-zA-Z0-9.!#$%&'*+/=_{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(value)
        }
    }
    return isValid
}