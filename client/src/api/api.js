import axios from 'axios'

const api = axios.create({
    // baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
    baseURL:'http://localhost:30001/api'
})

export const insertUser = payloadd => api.post('/Login',payloadd)


const apis = {insertUser}
export default apis;