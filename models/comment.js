const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CommentSchema = new Schema({
    post_id: {
        type:String,
        require:true
    },
    user_name:{
        type:String,
        require:true
    },
    user_image:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema)