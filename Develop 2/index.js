const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")

// array of questions for user
const questions = [
    {
        name:"Project Title",
        message:"Enter the title for your project",
        type:"input",
       
    },

    {
        name:"Description",
        message:"Enter the description",
        type:"input",
    },

    {
        name:"Installation Instructions",
        message:"Enter installation instructions if any",
        type:"input",
    },

    {
        name:"Usage Information",
        message:"Enter the intended use for this application",
        type:"input",
    },

    {
        name:"Contibution",
        message:"Who contributed to this project?",
        type:"input",
    },

    {
        name:"Installation Instructions",
        message:"Enter installation instructions if any",
        type:"input",
    },

    {
        choices:["MIT", "GNU", "Apache"],
        message:"Select a licensing category",
        type:"list",
    },
    
];

// function to write README file
async function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
