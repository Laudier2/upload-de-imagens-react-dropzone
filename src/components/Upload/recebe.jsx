import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import "./style.css"

export default function MyDropzone() {

    const [selectedFile, setSelectedFile] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const fileUrl = URL.createObjectURL(file)

        setSelectedFile(fileUrl)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile
                ? <img
                    src={selectedFile}
                    alt="img"
                    className="img"
                />
                : <p>
                    <FiUpload />
                    <br />
                    Insira uma Imagem aqui!
                </p>
            }
        </div>
    )
}