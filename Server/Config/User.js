const mongoose  = require('mongoose')
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'name is required'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
})

module.exports = mongoose.model('signup',UserSchema)