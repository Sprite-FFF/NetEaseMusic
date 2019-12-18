import React, { useState } from 'react'
import Header from '../../components/header'
import Mobile from './Mobile'
import Password from './Password'
import Service from '../../service'
import { useHistory } from 'react-router-dom'
import { validMobile } from '../../assets/js/validate' 
import './index.scss'
const Login = () => {
    const history = useHistory()
    const [ step, setStep ] = useState(1)
    const [ mobile, setMobile ] = useState()
    const [ pwd, setPwd ] = useState()
    const handleNext = () => {
        switch (step) {
            case 2:
                login()
                break
            default:
                validMobile(mobile) ? setStep(2) : console.log('手机号不能为空')
                break
        }
    }
    const handleMobileChange = $event => {
        setMobile($event.target.value)
    }
    const handlePwdChange = $event => {
        setPwd($event.target.value)
    }
    const login = () => {
        if(!pwd) {
            return console.log('请输入密码')
        }
        Service.login({ phone: mobile, password: pwd })
            .then(result => {
                history.push('/piazza')
            })
            .catch()
    }
    return(
        <div className="login-container">
            <Header />
            {
                step === 1 
                ? <Mobile mobile={ mobile } onChange={ handleMobileChange } /> 
                : <Password pwd={ pwd } onChange={ handlePwdChange } />
            }
            <button onClick={ handleNext }>下一步</button>
        </div>
    )
}

export default Login