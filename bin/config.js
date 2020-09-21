var shell = require("shelljs");
var output = shell.exec("npm install",{silent:true,async:false}).output;
console.log(output);
console.log("Instalou")