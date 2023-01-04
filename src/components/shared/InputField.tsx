import React from 'react'

import { InputProps } from 'interfaces'

const InputField: React.FC<InputProps> = ({
 type,
 label,
 name,
 onChange,
 placeholder,
 element,
 data,
 errorText,
 rows,
 required,
 initialValid,
 initialValue,
}) => {
 if (element === 'textarea') {
  return (
   <div className="w-full flex flex-col">
    <label className="font-light text-sm" htmlFor={name}>
     {label}
    </label>
    <textarea
     name={name}
     onChange={onChange}
     placeholder={placeholder}
     rows={rows}
     required={required}
     className="w-full h-full border p-2 border-gray-400 rounded-[4px] outline-none focus:border-primary resize-none"
    />
   </div>
  )
 }

 if (element === 'select') {
  return (
   <div className="w-full flex flex-col">
    <label className="font-light text-sm" htmlFor={name}>
     {label}
    </label>
    <select
     name={name}
     onChange={onChange}
     required={required}
     className="w-full h-full border p-2 border-gray-400 rounded-[4px] outline-none focus:border-primary">
     {data?.map((opt, index) => (
      <option key={index} value={opt.value}>
       {opt.name}
      </option>
     ))}
    </select>
   </div>
  )
 }

 return (
  <div className="w-full flex flex-col">
   <label className="font-light text-sm" htmlFor={name}>
    {label}
   </label>
   <input
    type={type}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full h-full border p-2 border-gray-400 rounded-[4px] outline-none focus:border-primary"
   />
  </div>
 )
}

export default InputField
