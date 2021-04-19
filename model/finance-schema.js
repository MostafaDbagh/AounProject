const mongoose = require('mongoose')

const FinanceSchema = new mongoose.Schema(
    {
        first:{type:String,required:true},
       second:{type:String ,required:true},
       three:{type:String,required:true},
       four:{type:String,required:true}
    }
)

module.exports=mongoose.model('awnFinance',FinanceSchema)