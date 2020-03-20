const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    "adminId":String,
    "userName":String,
    "password":String
})

module.exports = mongoose.model('Admin',adminSchema,"admin");