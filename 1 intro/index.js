// custom module
const matematica = require("./matematica.js");
const utilsMemory = require("./util.units.js");
const fileSystem = require("./fileSystem.js");

// node modules
const os = require('os');

/* use custom modules
result = matematica.add(10,20);
console.log("result: ",result)
*/

/* call os module
console.log("HOST: ",os.hostname());
console.log("PLATFORM: ",os.platform());
console.log("FREE MEM: ",utilsMemory.bytesToGigabytes(os.freemem()));
*/

/* call filesystem module
fileSystem.createFile("./","test.txt","abcd1234");
fileSystem.readFile("./","test.txt");
*/