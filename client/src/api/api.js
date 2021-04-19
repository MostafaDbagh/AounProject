import axios from 'axios'

const api = axios.create({
     baseURL:'https://thawing-harbor-47972.herokuapp.com/api'
   // baseURL:'http://localhost:3555/api'
})



const addFinance = payload => api.post('/finance',payload)

const addSubscriber = payload => api.post('/subscribe',payload)
const addContact = payload => api.post('/contact',payload)

const apis = {addFinance,addSubscriber,addContact}


export default apis;