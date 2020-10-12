const { clear } = require("console");
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
        name:"Installation",
        message:"Enter installation instructions if any",
        type:"input",
    },

    {
        name:"Usage Information",
        message:"Enter the intended use for this application",
        type:"input",
    },

    {
        name:"Contribution",
        message:"Who contributed to this project?",
        type:"input",
    },

    {
        name:"Username",
        message:"Enter your Github username",
        type:"input",
    },
    {
        name:"Email",
        message:"Enter your email address",
        type:"input",
    },

    {   
        name: "Licenses",
        choices:["MIT", "GNU", "Apache"],
        message:"Select a licensing category",
        type:"list",
    },
    
];

// function to write README file
 async function writeToFile(fileName, data) {
    let customFile = `
     ${data.title}

     #Table of Contents
     - [Description](#description)
     - [Installation](#installation)
     - [Usage](#usage)
     - [Contribution](#contribution)
     - [license](#license)

     ## Description
     ${data.description}

     ##Installation
     ${data.installation}

     ##Usage
     ${data.usage}

     ##Contribution
     ${data.contribution}

     ##License
     ${data.license}

     Link to my GitHub Profile:
     [GitHub Profile](https://github.com/${data.username})

     My email:
     ${data.email}
     `;
     try{
     await writeFileAsync(fileName, customFile);
     }
     catch (error){
         throw Error(error)
     }
     
}


// function to initialize program
async function init() {
    try {
        const dataSets = await inquirer.prompt(questions);
        writeToFile("read1.md", dataSets);
        console.log("good response");
    }
    catch (err){
        console.log(err);
    }

}

// function call to initialize program
init();
