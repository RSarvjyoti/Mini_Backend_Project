const {Schema, model} = require("mongoose");

const postSchema = new Schema({
    image: String,
    caption: String
})

const Post = model("post",postSchema);

module.exports = Post;