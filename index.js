// Packages needed to run this application. 

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Start the questions for the user. These will prompt up to the user to answer. 
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "project-title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "contact",
            message: "What is your contact information?"
        },
        {
            type: "input",
            name: "deployed-project",
            message: "What is the link to your deployed project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project."
        },
        {
            type: "input",
            name: "table-of-contents",
            message: "Optional field- provide a table of contents for the user. If you do not have one, please submit NA."
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
            type: "input",
            name: "license",
            message: "This field lets other developers know what they can, and cannot do, with your project. Please enter in your license type:"
        },
        {
            type: "input",
            name: "badges",
            message: "input any badges you have:"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Is your project open for contributing? If yes, please tell how users can contribute:"
        },
    ]);
}
// Confirming it will prompt the user by creating a function
async function init() {
    promptUser();
}
// call the init 
init();
