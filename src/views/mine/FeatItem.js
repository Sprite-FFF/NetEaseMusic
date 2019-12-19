import React from 'react'
const FeatItem = props => {
    const { feature } = props
    return (
        <div className="feat-item">
            <div><i className={`iconfont icon-${feature.icon}`}></i></div>
            <div>{ feature.text }<span>({ feature.count })</span></div>
        </div>
    )
}

export default FeatItem