import React from 'react'

const Password = props => {
    const { onChange } = props
    return(
        <div className="item">
            <input type="password" onChange={ (e) => onChange(e) } placeholder="请输入密码"/>
            <span className="forget">忘记密码？</span>
        </div>
    )
}

export default Password