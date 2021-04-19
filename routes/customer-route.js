const router = require('express').Router()
const userCtrl = require('../controllers/customer-ctrl')




router.post('/finance',userCtrl.createFinance)
router.post('/subscribe',userCtrl.createSubscibe)
router.post('contact/how',userCtrl.createContact)
module.exports = router