const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name:{type:String},
    location:{type:String},
    likes:{type:Number},
    description:{type:String},
    postImage:{
        type:String,
        default:"no image"
    },
});

PostSchema.set('timestamps',true);
mongoose.model('POSTMODEL',PostSchema);
// const PostModel = mongoose.model('instPost',PostSchema);

// module.exports = PostModel;