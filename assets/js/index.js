// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to call this project?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you decide to build this project?',
        },
        {
            type: 'input',
            name: 'who',
            message: 'Who is your user for this project?',
        },
        {
            type: 'input',
            name: 'what',
            message: 'What do you plan on doing with this project?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How did you install this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can you use this project?',
        },
        {
            type: 'list',
            message: 'Choose a license for your project',
            name: 'license',
            choices: ['Unlicense', 'MIT', 'Apache']
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How are you going to test this project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'If any questions pop up, which email should we reach you at?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'If you want to see any other work, what is your github username?',
        },
    ])
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')
        );
    });

