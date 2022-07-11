import axios from 'axios'
import React, { useState } from 'react'

export default function Recebe() {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upçoad_preset', 'darwin')
        setLoading(true)
        const res = await axios.post('http://localhost:3000/', {
            imagem: data
        })
        
        setImage(data)
        setLoading(false)
    }

  return (
    <div>
        <h1>Upload Imagem</h1>
        <br />
        <input 
            type="file" 
            name="file"
            placeholder="Upload Imagem"
            onChange={uploadImage}
        />
        <br /><br />
        {loading ? 
            (<h1>Loading...</h1>) :
            (<img src={image} alt="Eesperando imagem" className="col-12" />)
        }
    </div>
  )
}
