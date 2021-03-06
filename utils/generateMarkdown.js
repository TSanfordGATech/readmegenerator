// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title} ![${answers.license}](https://img.shields.io/badge/license-${escape(answers.license)}-brightgreen)

  # Table of Contents
  *[Contact](#Contact)

  *[link](#Links)

  *[Project Description](#description)

  *[Users will need to install the following items to run this application:](#installation)
  *[Usage Rights](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Badges](#badges)
  *[Contributors](#contributing)
  
  # Contact 
  ${answers.contact}
  
  # Link
  ${answers.link}
  
  # Description
  ${answers.description}
  
  # Install
  ${answers.installation}
  
  # Usage Rights
  ${answers.usage}
  
  # Credits
  ${answers.credits}
  
  # License
  ${answers.license}
  
  # Badges
  ${answers.badges}
  
  # Contributors
  ${answers.contributing}`;
}

module.exports = generateMarkdown;
