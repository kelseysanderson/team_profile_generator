const inquirer = require('inquirer');
const Engineer  = require("./lib/engineer");
const Manager = require('./lib/manager');
const generateHtml = require("./lib/generateHtml");

var manager= new Manager ("");

// var engineer = new Engineer []

const managerPrompts = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
        },
        {
        type: 'input',
        message: 'What is the manager\'s employee id?',
        name: 'id',
        },
        {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'email',
        },
        {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        },
    ])
}

managerPrompts()
    .then((answers) => {
        manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber );
    })
    .then(() => generateHtml(manager.toHtml()));

//prompts
// const engineerPrompts = () => {
//     return inquirer.prompt([
//         {
//         type: 'input',
//         name: 'name',
//         message: 'What is the engineer\'s name?',
//         },
//         {
//         type: 'input',
//         message: 'What is the engineer\'s employee id?',
//         name: 'id',
//         },
//         {
//         type: 'input',
//         message: 'What is the engineer\'s email?',
//         name: 'email',
//         },
//         {
//         type: 'input',
//         message: 'What is the engineer\'s GitHub?',
//         name: 'github',
//         },
//         {
//         type: 'confirm',
//         message: 'Enter another Engineer? (Y/N)',
//         name:'another',
//         }
//     ])
  
// }
//while loop
// while