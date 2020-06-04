const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
{ 
   type : "input",
   message : "Enter a Project Title",
   name:"title"
},
{ 
   type : "input",
   message : "Enter a suitable description for your project",
   name:"description"
},
{  
   type : "list",
   message : "Please select a badge for your README",
   choices:["MIT License","GPLv3","AGPL"],
   name:"license"
},
{ 
   type : "input",
   message : "How do you install the dependencies for the project",
   name:"installation"
},
];

function writeToFile(fileName, answers) {

   fs.writeFile( fileName, generateMarkdown( answers ), function( error ){
      if(error) console.log(error);
      else console.log( "Success!");
   })
}

function init() {

inquirer
.prompt( questions )
.then((answers) => {
    //console.log( answers );
    writeToFile('README.md', answers);
    console.log( generateMarkdown( answers ) );
});
}

init();
