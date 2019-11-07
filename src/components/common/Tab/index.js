import React from 'react'
import './index.scss'

const Item = props => {
    const { item, onChange } = props
    return (
        <div onClick={() => onChange(item.key)}  className={`tab-item ${ item.isActive ? 'active' : '' }`}>
            { item.text }
            <span></span>
        </div>
    )
}

const Tab = props => {
    const { className, tabs, onChange } = props
    return (
        <div className={ `tab-container ${ className }` }>
            {
                tabs.map(item => <Item item={ item } onChange={ onChange } key={ item.key } />)
            }
        </div>
    )
}

export default Tab