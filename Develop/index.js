const inquirer = require('inquirer');
const fs = require('fs');



const questions = [
{ type : "input",
   message : "Enter a Project Title",
   name:"projectTitle"
}
   





];

function writeToFile(fileName, data) {
}

function init() {

inquirer
.prompt( questions )
.then((answers) => {
    console.log( answers );
});
}

init();
