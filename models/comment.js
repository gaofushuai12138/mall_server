const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    "commentId":String,
    "commentContent":String,
    "createTime":Date,
    "commenterId":String,
    "updateTime":Date
})

module.exports = mongoose.model("comment",commentSchema,"comment");