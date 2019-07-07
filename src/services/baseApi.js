import axios from 'axios'

const baseAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-type' : 'application/json'
    }
})
export default {
    baseAPI
}