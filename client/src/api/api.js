import axios from 'axios'

const api = axios.create({
     baseURL:'https://thawing-harbor-47972.herokuapp.com/',
   //  baseURL:'https://thawing-harbor-47972.herokuapp.com/contact/how'

})



const addFinance = payload => api.post('api/finance',payload)

const addSubscriber = payload => api.post('api/subscribe',payload)
const addContact = payload => api.post('contact/how',payload)

const apis = {addFinance,addSubscriber,addContact}


export default apis;