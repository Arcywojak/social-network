const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const PostSchema = new Schema({
    user_id: {
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
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    tags:{
        type:[String],
        default: undefined
    },
    add_date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema)