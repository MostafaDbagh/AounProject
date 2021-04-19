const mongoose = require('mongoose')

const FinanceSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
       product:{type:String ,required:true},
       tel:{type:String,required:true},
       awnknow:{type:String,required:true},
       message:{type:String,required:true}
    }
)

module.exports=mongoose.model('contacts',FinanceSchema)