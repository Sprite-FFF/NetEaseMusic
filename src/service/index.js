import { post, get } from './request'
import apiJson from './api'

const Service = {}

Object.keys(apiJson).forEach(key => {
    Service[key] = params => {
        const { method, url } = apiJson[key]
        return method.toUpperCase() === 'GET' ? get(url, params) : post(url, params)
    }
})

export default Service