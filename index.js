// Packages needed to run this application. 
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// const generateMarkdown = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Start the questions for the user. These will prompt up to the user to answer. 
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "contact",
        message: "What is your contact information?"
    },
    {
        type: "input",
        name: "link",
        message: "What is the link to your deployed project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What do users need to have installed to run this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for how to use:"
    },
    {
        type: "input",
        name: "credits",
        message: "List your contributors if applicable or NA if there were no contributors for this project."
    },
    {
        type: "checkbox",
        name: "license",
        message: "This field lets other developers know what they can, and cannot do, with your project. Please select your license type:",
        choices: [
            "Apache",
            "Boost",
            "BSD",
            "Creative Commons, CCO",
            "Creative Commons, international",
            "Eclipse Public",
            "GNU",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "Open Data Commons",
            "Unlicense"
        ]
    },
    {
        type: "input",
        name: "badges",
        message: "input any badges you have:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Is your project open for contributing? If yes, please tell how users can contribute:"
    },

];
// .then(answers => {
//     const generateMarkdown = `# ${answers.title} ![${answers.license}](https://img.shields.io/badge/license-${escape(answers.license)}-brightgreen)
const writeFileAsync = util.promisify(fs.writeFile);

// const readmeTitle = answers.title + ".md";
// fs.writeFile(readmeTitle, generateMarkdown, err => {
//     if (err) console.err(err);
//     else console.log("Success!");
// })
//     })
// }
// async function init() {
//     promptUser();
// }

// init();

function init () {
    inquirer.prompt(questions).then((answers)=> {
        const README = generateMarkdown(answers);
        return writeFileAsync ("README.md", README)
    })
    .then (() => console.log("Success!"))
    .catch (err => console.error(err));
}

init();