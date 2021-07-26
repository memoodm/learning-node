require('colors')
const path = require('path')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//config
const PORT = 3000

//database
const DATABASE_NAME = 'node-js-blog';
mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`)

//assets for public access
app.use(express.static('public')) 

//FRONT: endpoints
app.get("/", (request,response) => {
    response.sendFile( path.resolve(__dirname,"pages","index.html") );
});
app.get("/index", (request,response) => {
    response.sendFile( path.resolve(__dirname,"pages","index.html") );
});
app.get("/about", (request,response) => {
    response.sendFile( path.resolve(__dirname,"pages","about.html") );
});
app.get("/post", (request,response) => {
    response.sendFile( path.resolve(__dirname,"pages","post.html") );
});
app.get("/contact", (request,response) => {
    response.sendFile( path.resolve(__dirname,"pages","contact.html") );
});

//server
app.listen( PORT, () => {
    console.log("Server starting".green);
} );