import axios from "axios";

axios.interceptors.request.use((config) => {
    if(config.auth) {
        const token = localStorage.getItem('access_token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
})

axios.interceptors.response.use((response) => {
    return response
}, 
(error) => {
    if(error.response.status === 401) {
        console.log("anda harus login");
    }
    return Promise.reject(error)
})
    