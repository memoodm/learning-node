const http = require('http');

const PORT = 3000
const SERVER = function(req,res){
    console.log("New: ",req.method," ",req.url);
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola mundo desde nodejs</h1>');
    res.end();
}

http.createServer(SERVER)
    .listen(PORT);