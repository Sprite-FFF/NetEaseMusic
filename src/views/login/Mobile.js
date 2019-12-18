import React from 'react'

const Mobile = (props) => {
    const { mobile, onChange } = props
    return (
        <div>
            <p className="tip">未注册手机号登录后将自动创建账号</p>
            <div className="item">
                <span>+86</span>
                <input onChange={ (e) => onChange(e) } type="number" placeholder="请输入手机号"/>
                <span style={ { display: mobile ? '' : 'none' } } className="del"></span>
            </div>
        </div>
    )
}

export default Mobile