import React, { useState,useEffect } from 'react'
import './index.scss'

const Uploader = () => {
    const fileReader = new FileReader()
    const [images, setImages] = useState([])

    const handleSelectFile = $event => {
        $event.persist()
        console.log($event)
        const file = $event.target.files[0]
        fileReader.onload = () => {
            // console.log(fileReader)
            setImages([...images, fileReader.result])
            $event.target.value = ''
        }
        fileReader.readAsDataURL(file)
    }
    useEffect(() => {
        console.log(images.length)
    })
    return (
        <div className="uploader">
            {
                images.map((base64, index) => <div 
                    key={ index } 
                    style={ 
                        {
                            backgroundImage: `url('${ base64 }')`, 
                            backgroundSize: 'cover'
                        } 
                    }></div>)
            }
            <label className="add" style={{ display: images.length >= 9 ? 'none' : 'block' }}><input onChange={ handleSelectFile } type="file"/></label>
        </div>
    )
}

export default Uploader