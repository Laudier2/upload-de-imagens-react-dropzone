import { useCallback, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
//import styled from 'styled-components'

import { UploadImagem } from './UploadImagem'

export default function ImageDropZone() {
  
    const [ loading, setLoading ] = useState(false)

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)

        setLoading(true)
        UploadImagem(acceptedFiles[0])
        .then((json) => onChange(json.url))
        .finally(() => setLoading(false))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'imagem/*',
    })

    return (
        <Dropzone {...getRootProps}>
            <input {...getInputProps()} />
            {
                value ? (
                    <img src={value} />
                ) : loading ? (
                    <Spinner variant="standard" animation="border" role='status' />
                ) : <span>Drag & drop file here, or click to select file</span>
            }

        </Dropzone>
    )

}
