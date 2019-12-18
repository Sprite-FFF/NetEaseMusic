import React, { useState, useEffect } from 'react'

const ImageWall = props => {
    const { images, containerWidth, className } = props
    const [ imageWidth, setImageWidth ] = useState(0)
    useEffect(() => {
        if(images.length === 1) {
            setImageWidth('100%')
            return
        }
        if( images.length === 2 || images.length === 4) {
            setImageWidth((containerWidth - 0.12) / 2 + 'rem')
            return
        }
        setImageWidth((containerWidth - 0.24) / 3 + 'rem')
    }, [images, containerWidth])
    return (
        <div style={ {width: containerWidth + 'rem'} } className={ `images ${ className }` }>
            {
                images.map(src => {
                    if(images.length === 1) {
                        return <img style={ {width: imageWidth} } src={ src } key={ src } alt="" />
                    }
                    return <div 
                    style={ 
                                { 
                                    width: imageWidth, 
                                    height: imageWidth,
                                    backgroundImage: `url('${ src }')`, 
                                    backgroundSize: 'cover' 
                                } 
                            }
                    // 四张图片时样式需要特殊处理
                    className={ images.length === 4 ? 'four' : 'other' }
                    key={ src }></div>
                })
            }
        </div>
    )
}

ImageWall.defaultProps = {
    images: [],
    containerWidth: 7.5
}

export default ImageWall