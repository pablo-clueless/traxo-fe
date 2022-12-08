import React from 'react'

import {InputProps} from '../../interfaces'

const InputField:React.FC<InputProps> = ({type, label, name, onChange, placeholder, element, data, errorText, rows}) => {

  if(element === 'textarea') {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} onChange={onChange} placeholder={placeholder} rows={rows} />
      </div>
    )
  }

  if(element === 'select') {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={onChange}>
          {data?.map((opt, index) => (
            <option key={index} value={opt.value}>{opt.name}</option>
          ))}
        </select>
      </div>
    )
  }
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputField