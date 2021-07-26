const mongoose = require('mongoose')
const Post = require('../models/Post')

const DATABASE_NAME = 'node-js-blog-test';
mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`)

function create(title,description,content){
   Post.create({
        title: title,
        description: description,
        content: content
    }, 
    (error,post) => {
        console.log(error,post);
    }); 
}

function getAll(title){
    Post.find({},
    (error,post)=>{
        console.log(error,post);
    });
}

function getById(id){
    Post.findById(id,
    (error,post)=>{
        console.log(error,post);
    });
}

function getByTitle(title){
    Post.find({
        title: title
    },
    (error,post)=>{
        console.log(error,post);
    });
}

getById("60fe24197d69906ef04fb0bb");