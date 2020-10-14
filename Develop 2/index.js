const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const userQuestions = [
    {
        name:"Title",
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
        name:"Usage",
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
    let customFile = `# ${data.Title}
    #Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [License](#license)
  
    ## Description
    ${data.Description}
  
    ##Installation
    ${data.Installation}
  
    ##Usage
    ${data.Usage}
  
    ##Contribution
    ${data.Contribution}
  
    ##Licenses
    ${data.Licenses}
  
    Link to my GitHub Profile:
    [GitHub Profile](https://github.com/${data.username})
  
    My email:
    ${data.Email}`;

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
        const dataSets = await inquirer.prompt(userQuestions);
        writeToFile("read1.md", dataSets);
        console.log("good response");
    }
    catch (error){
        throw Error(error)
    }

}

// function call to initialize program
init();
