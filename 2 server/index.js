const http = require('http');
require('colors');

const PORT = 3000
const SERVER = (req,res) => {
    console.log("Request: ",req.method.green," ",req.url.red);
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola mundo desde nodejs</h1>');
    res.end();
}

http.createServer(SERVER)
    .listen(PORT);