const express = require("express");
const app = express();
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const Post = require("./models/post.model");
const cors = require("cors");

app.use(express.json());
// app.use(cors());

// upload file multer
const upload = multer({
    storage:multer.memoryStorage()
})

// for that used imagekit as a cloud storage provider

app.post('/create-post', upload.single("image"), async(req,res) => {
    // console.log(req.body); 
    // console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    // console.log(result);
    const post = await Post.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "created post",
        post: post
    })
})

app.get("/posts", async(req, res) => {
    const posts = await Post.find();
    return res.status(200).json({
        message: "Posts fetched!",
        posts : posts
    })
})

module.exports = app