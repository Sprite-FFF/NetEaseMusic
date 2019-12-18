const BASE_URL = 'http://localhost:3030'
const Fetch = (url, config = {}) => {
    return fetch(`${BASE_URL}${url}`, {
        credentials: 'include',
        ...config
    })
    .then(response => {
        console.log(response)
        const result = response.json
        if (response.ok) {
            return result
        }
        return Promise.reject(result)
    })
    .catch(error => {
        console.log(error)
        const _error = {
            code: -10000,
            message: '网络异常'
        }
        return Promise.reject(_error)
    })
}

export const post = (url, params = {}) => {
    return Fetch(url, {
        body: JSON.stringify(params), 
        header: new Headers({
            'Content-Type': 'application/json'
        })
    })
}

export const get = (url, params) => {
    if (params) {
        const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
        return Fetch(`${url}?${query}`)
    }
    return Fetch(url)
}