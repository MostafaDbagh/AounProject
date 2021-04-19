

const Finance = require('../model/finance-schema')
const Subscribe = require('../model/subscribe-model')
const Contact = require('../model/contact-schema')

createFinance = (req,res)=>{
    const body = req.body
 console.log(body)
    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const finance = new Finance(body)
    console.log(finance)

    if (!finance) {
        
        return res.status(400).json({ success: false, error: err })
    }

    finance
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: finance._id,
               
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'no message!',
            })
        })
}
createSubscibe = (req,res)=>{
    const body = req.body
 console.log(body)
    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const subscribe = new Subscribe(body)
    console.log(subscribe)

    if (!subscribe) {
        
        return res.status(400).json({ success: false, error: err })
    }

    subscribe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: subscribe._id,
               
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'no message!',
            })
        })
}
createContact = (req,res)=>{
    const body = req.body
 console.log(body)
    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const contact = new Contact(body)
    console.log(contact)

    if (!contact) {
        
        return res.status(400).json({ success: false, error: err })
    }

    contact
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contact._id,
               
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'no message!',
            })
        })
}
module.exports = {
    createFinance,createSubscibe,createContact
  
}