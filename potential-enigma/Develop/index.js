// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// set of quietions for: Name of title for project, description of the project, istallation, usage, license, contributions, email address, github username . 

const questions = [
    {
    type: 'input',
    name: 'title of project',
    message: 'What is the title of your project?',
    },

    {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
    },

    {
    type: 'input',
    name: 'installation',
    message: 'Please provide with instructions to install your project',
    },

    {
    type: 'list',
    name: 'license',
    message: "Please choose a license for your project",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0','BSD 3', 'None']
    },

    {
    type: 'input',
    name: 'contributions',
    message: 'Please provide provide information on how to contribute to your project.',
     },

    {
    type: 'input',
    name: 'GitHub username',
    message: 'Please enter your GitHub username:',
    },
    {
    type: 'input',
    name: "email address",
    message: 'Please enter your email address:',
    }, 

];
inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `${data.name}.README.md`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('README.md file created!')
        );
      });
//     .then(answers => (
//         fs.writeFile('README.md',(err) =>
//         err ? console.log (err) : console.log ('README.md file created!')
//         )
//     ));
//     // console.log(answers)


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
