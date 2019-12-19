import React, { useState } from 'react'

const Menu = () => {
    const [ menus ] = useState([
        {
            icon: '',
            text: '每日推荐'
        },
        {
            icon: '',
            text: '歌单'
        },
        {
            icon: '',
            text: '排行榜'
        },
        {
            icon: '',
            text: '电台'
        },
        {
            icon: '',
            text: '直播'
        }
    ])
    return (
        <ul className="menu">
            {
                menus.map(el => {
                    return (
                        <li key={ el.text }>
                            <div></div>
                            <p>{ el.text }</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Menu