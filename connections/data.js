const mongoose = require("mongoose");

const UserData =  new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    useremail :{
        type:String,
        required:true,
        unique:true
    },
    userpassword :{
        type:String,
        required:true,
    }
})

const Register = new mongoose.model("Register",UserData);
module.exports = Register;