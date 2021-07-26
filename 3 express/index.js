const express = require('express')
const path = require('path')
const app = express()

//config
const PORT = 3000

//static assets
app.use(express.static('public'));

//endpoints
app.get('/', (request,response) => { 
    response.sendFile( path.resolve(__dirname,"template/home.html") );
})

app.get('/about', (request,response) => { 
    response.json( 
        {name: "in about page"} 
    );
})

//init server
app.listen(PORT, () => {
    console.log("Starting server ...");
})