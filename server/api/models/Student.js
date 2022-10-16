const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String,
    age: Number,
    phone: Number,
    email: String,
    city: String
})

module.exports = mongoose.model('Student', studentSchema)