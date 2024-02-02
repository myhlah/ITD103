const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    course: String,
    year_level: String,
    address: String
    
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;