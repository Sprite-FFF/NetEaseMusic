import React, { useState } from 'react'
import Menu from '../find/Menu'
import FeatItem from './FeatItem'
import './index.scss'

const Mine = () => {
    const [ features ] = useState([
        {
            icon: 'yinyue',
            text: '本地音乐',
            count: 1
        },
        {
            icon: 'zuijinbofang',
            text: '最近播放',
            count: 1
        },
        {
            icon: 'xiazai',
            text: '下载管理',
            count: 1
        },
        {
            icon: 'diantai',
            text: '我的电台',
            count: 1
        },
        {
            icon: 'wodeshoucang',
            text: '我的收藏',
            count: 1
        }
    ])
    return (
        <div>
            {/* @todo 改造可滑动 */}
            <Menu />
            <div>
                {
                    features.map(el => <FeatItem feature={ el } key={ el.icon } />)
                }
            </div>
        </div>
    )
}

export default Mine