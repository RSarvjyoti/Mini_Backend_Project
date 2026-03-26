const express = require("express");
const app = express();
const multer = require("multer");
const uploadFile = require("./services/storage.service");

app.use(express.json());

// upload file multer
const upload = multer({
    storage:multer.memoryStorage()
})

// for that used imagekit as a cloud storage provider

app.post('/create-post', upload.single("image"), async(req,res) => {
    // console.log(req.body); 
    // console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    console.log(result);
    
})

module.exports = app