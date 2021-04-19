const router = require('express').Router()
const userCtrl = require('../controllers/customer-ctrl')


router.post('/Login',userCtrl.createUser)

router.post('/finance',userCtrl.createFinance)
router.post('/subscribe',userCtrl.createSubscibe)
router.post('/message',userCtrl.createContact)
module.exports = router