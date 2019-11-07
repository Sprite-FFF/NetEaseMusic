import React from 'react'
import './index.scss'

const HotItem = props => {
    const { index } = props
    return (
        <div className="hot-item">
            <span className={ `fc-${ index + 1 }` }>{ index + 1 }</span>
            <div>
                <p>女生太主动会不会让男生觉得随便？</p>
                <span>2800热度</span>
            </div>
        </div>
    )
}

export default HotItem