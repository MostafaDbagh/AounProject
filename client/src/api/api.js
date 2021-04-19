import axios from 'axios'

const api = axios.create({
    // baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
    baseURL:'http://localhost:3555/api'
})

//export const insertUser = payloadd => api.post('/Login',payloadd)

const addFinance = payload => api.post('/finance',payload)

const addSubscriber = payload => api.post('/subscribe',payload)
const addContact = payload => api.post('/message',payload)

const apis = {addFinance,addSubscriber,addContact}


export default apis;