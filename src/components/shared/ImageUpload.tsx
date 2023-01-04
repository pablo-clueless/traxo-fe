import React, { ChangeEvent, Dispatch, DragEvent, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import { FiTrash } from 'react-icons/fi'

interface Props {
    setImageFile: Dispatch<SetStateAction<File | ArrayBuffer | null>>
}
const ImageUpload = ({setImageFile}: Props) => {
    const [previewURL, setPreviewURL] = useState<ArrayBuffer | string | null>(null)
    const [dragActive, setDragActive] = useState<boolean>(false)

    const handleFile = (file: File) => {
        if(!file) return
        const { type } = file
        if (type === "image/png" || type === "image/jpg" || type === "image/jpeg") {
        const fileReader = new FileReader()
        fileReader.onload = () => setPreviewURL(fileReader.result)
        fileReader.readAsDataURL(file)
        } else return toast.error("Wrong file type")
        setImageFile(file)
    }

    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    const handleDrop = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
    
        if (!e.dataTransfer?.files) return
        let file = e.dataTransfer.files[0]
        handleFile(file)
    }
      
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.currentTarget.files) return
        let file = e.currentTarget.files[0]
        handleFile(file)
    }

    const deleteFile = () => {
        setPreviewURL(null)
        setImageFile(null)
    }

  return (
    <div className='w-full h-full bg-gray-300 border rounded-md overflow-hidden'>
        {previewURL === null ? (
            <div className='w-full h-full rounded-md'>
                <label className='w-full h-full grid place-items-center gap-4 cursor-pointer'>
                    {dragActive ? (
                        <p>Drop files here</p>
                    ):(<>
                        <p>Drag & drop your file here</p>
                        <p>or click to upload a file</p>
                        <i>.png, .jpg and .jpeg only.</i>
                    </>)}
                    <input type="file" className='w-full h-full appearance-none' onChange={handleChange} onDragEnter={handleDrag} onDragLeave={handleDrop} onDragOver={handleDrag} onDrop={handleDrop} />
                </label>
            </div>
        ):(
            <div className='w-full h-full rounded-md relative'>
                <img src={`${previewURL}`} alt="" className='w-full h-full object-contain rounded-md' />
                <button type='button' onClick={() => deleteFile()} className='bg-gray-200 rounded-full p-2 absolute top-5 left-5'>
                    <FiTrash className='text-black' />
                </button>
            </div>
        )}
    </div>
  )
}

export default ImageUpload