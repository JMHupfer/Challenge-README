// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'unlicense') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateLicense(data) {
  return `# ${data.title}

  ## Description

  - ${data.why}
  - ${data.who}
  - ${data.what}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributor](#contributors)
  - [Tests](#tests)
  - [Questions](#questions) 

  
  ## Installation
  
  To install this application, please follow these steps:
  
  - ${data.install}
  
  ##Usage
  
  - ${data.usage}
  
  ##License

  - ${renderLicense(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicense.com/).

  ##Contributors

  - ${data.contributor}

  ## Tests

  - ${data.tests}

  ## Questions

  - Direct any questions about the repo to me at: ${data.questions}. 
  
  - You can locate me at my GitHub page as well at: [${data.githubUsername}](https://github.com/${data.githubUsername}/)
`;
}

module.exports = generateLicense;