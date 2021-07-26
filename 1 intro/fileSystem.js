const fs = require('fs');

function createFile(url,name,content){
    fs.writeFile(url+name, content, function (err) {
        if(err){
            throw new Error('Error creando archivo: ',err);
        }
        console.log("Archivo creado correctamente");
    })
}

function readFile(url,name){
    fs.readFile(url+name, function (err,data) {
        if(err){
            throw new Error('Error leyendo archivo: ',err);
        }
        console.log("Contenido: ",data.toString());
    })
}

const fileSystem = {
    createFile: createFile,
    readFile: readFile,
};
module.exports = fileSystem;