const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        login: String,
        password: String
})

const ProfileSchema = new mongoose.Schema({
    name : String,
    surname: String,
    dateOfBirth: String,
    Comments: String,
    rol : String
})

const CreedentialsSchema = new mongoose.Schema({
    adress: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("User",UserSchema)