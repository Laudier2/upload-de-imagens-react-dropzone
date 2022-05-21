import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import "./style.css"

export default function MyDropzone() {

    const [selectedFile, setSelectedFile] = useState('')
    const [name, setName] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const fileUrl = URL.createObjectURL(file)

        setSelectedFile(fileUrl)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    console.log(selectedFile, name)

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                {selectedFile
                    ? <img
                        src={selectedFile}
                        alt="img"
                        className="img"
                    />
                    : <p>
                        <FiUpload style={{ width: 160, color: 'green' }} />
                        <br />
                        Insira uma Imagem aqui!
                    </p>
                }
            </div>
            <input type="text" onChange={e => setName(e.target.value)} />
        </>
    )
}