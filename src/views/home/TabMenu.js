import React from 'react'

const TabMenu = () => {
    return (
        <div className="tab-menu">
            <div className="side-bar">
                <i className="iconfont icon-menu"></i>
            </div>
            <div className="middle-tab">
                <div>我的</div>
                <div className="active">发现</div>
                <div>云村</div>
                <div>视频</div>
            </div>
            <div className="search">
                <i className="iconfont icon-search"></i>
            </div>
        </div>
    )
}

export default TabMenu