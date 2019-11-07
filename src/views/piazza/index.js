import React, { useState } from 'react'
import Tab from '../../components/common/Tab'
import PostItem from '../../components/piazza/post-item'
import HotItem from '../../components/piazza/hot-item'
import '../../assets/css/font-face.css'
import './index.scss'

const Piazza = () => {
    const TABS = [{text: '关注', key: 0, isActive: true}, {text: '最新', key: 1, isActive: false}, {text: '热榜', key: 2, isActive: false}]
    const [ tabs, setTabs ] = useState(TABS)
    const [ key, setKey ] = useState(0)
    const handleChangeTab = key => {
        setKey(key)
        setTabs(tabs.map(el => { 
            el.isActive = el.key === key
            return el
        }))
    }
    return (
        <div className="container">
            <div className="container-top">
                <header className="header">
                    <div>
                        <i className="iconfont icon-search"></i>
                        <span>搜索论坛内容...</span>
                    </div>
                    <div>
                        <i className="iconfont icon-edit-square"></i>
                        <span>发帖</span>
                    </div>
                </header>
                <Tab tabs={ tabs } onChange={ handleChangeTab } className="mt20 plr40" />
            </div>
            <div>
                {
                    (() => {
                        switch (key) {
                            case 0:
                                return (<div className="piazza__follow">
                                    <div>
                                        <p>发现更多感兴趣的话题</p>
                                        <button>开始吧</button>
                                    </div>
                                    {
                                        [1, 2, 3, 4, 5].map(el => <PostItem key={ el } className="mt32" />)
                                    }
                                </div>)
                            case 1:
                                return (<div>
                                    {
                                        [1 ,2, 3, 4, 5].map(el => <PostItem key={ el } className="mt32" />)
                                    }
                                </div>)
                            case 2:
                                return(
                                    <div>
                                        {
                                            [1,2,3,4,5].map((el, index) => <HotItem index={ index } key={ el } />)
                                        }
                                    </div>
                                )
                            default:
                                return null
                        }
                    })()
                }
            </div>
        </div>
    )
}

export default Piazza