const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
{ 
   type : "input",
   message : "Project Name",
   name:"title"
},
{ 
   type : "input",
   message : "Project Description",
   name:"description"
},
{  
   type : "list",
   message : "Select a license name",
   choices:["MIT","GPLv3","AGPL"],
   name:"license"
},
{ 
   type : "input",
   message : "Install Commands",
   name:"installation"
},
{ 
   type : "input",
   message : "Contributions",
   name:"contributing"
},
{ 
   type : "input",
   message : "Test Commands",
   name:"tests"
},
{ 
   type : "input",
   message : "Usage Commands or Instructions",
   name:"usage"
},
{ 
   type : "input",
   message : "Github Username",
   name:"username"
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
    writeToFile('../README.md', answers);
    console.log( generateMarkdown( answers ) );
});
}

init();
