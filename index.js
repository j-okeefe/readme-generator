// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title of your project.'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide list of contributers (if applicable).'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose desired license.',
        choices: [
            'None',
            'Apache',
            'GNU',
            'MIT',
            'Boost Software',
            'Creative Commons',
            'Eclipse',
            'Mozilla',
            'The Unlicense'
        ]
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide your email address.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Provide your GitHub username.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('README.md', generateMarkdown(data)))
        .then(() => console.log('README successfully created!'))
}

// Function call to initialize app
init();