// const inquirer = require('inquirer');
// const Engineer  = require("./lib/engineer");
// const Manager = require('./lib/manager');
// const generateHtml = require("./lib/generateHtml");

// var manager = new Manager ("");
// var engineer = new Engineer ("");
// // var intern= new Intern [""];



// // var engineer = new Engineer []
// function managerPrompts() {
//      inquirer.prompt([
//         {
//         type: 'input',
//         name: 'name',
//         message: 'What is the manager\'s name?',
//         },
//         {
//         type: 'input',
//         message: 'What is the manager\'s employee id?',
//         name: 'id',
//         },
//         {
//         type: 'input',
//         message: 'What is the manager\'s email?',
//         name: 'email',
//         },
//         {
//         type: 'input',
//         message: 'What is the manager\'s office number?',
//         name: 'officeNumber',
//         }])
//             .then(function(answers) {
//                 manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber );
//                 addTeamMember();
//     }); 
// } 

// function addTeamMember(){
//     inquirer.prompt([
//         {
//         type: 'list',
//         name: 'role',
//         message: 'What is the team member\'s role?',
//         choices: ["Engineer", "Intern"]
//         }])

//     .then(function(data){
//         engineerAndIntern(data.role)
//     });
// }

// function engineerAndIntern(role){
//     inquirer.prompt([
//         {
//         type: 'input',
//         name: 'name',
//         message: `What is the ${role}\'s name?`,
//         },
//         {
//         type: 'input',
//         message: `What is the ${role}\'s employee id?`,
//         name: 'id',
//         },
//         {
//         type: 'input',
//         message: `What is the ${role}\'s email?`,
//         name: 'email',
//         },
//         {
//         type: 'list',
//         message: 'Would you like to add another team member?',
//         choices: ["Yes, add another team member", "No, I am done."],
//         name:"addAnother"
//         }]).then(function(answers){})
//         .then(function(answers) {
//             if(role == "engineer"){
//                 inquirer.prompt([
//                     {
//                     type: 'input',
//                     name: 'github',
//                     message: `What is the ${role}\'s name?`,
//                     }]) 
//                 engineer = new Engineer(answers.name, answers.id,)
//                 console.log()
//             }
//         });  
// }
// // return inquirer.prompt([
// //     {
// //     type: 'list',
// //     message: 'What role would you like to add next?',
// //     choices: ['Engineer', 'Intern'],
// //     name: 'role',
// //     }, 

// // const engineerAndIntern = (role) => {
// //     console.log(role)
// // }
        
// managerPrompts();

    



// // managerPrompts()
// //     .then((answers) => {
// //         manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber );
// //     })
// //     .then(() => generateHtml(manager.toHtml()));



// //need to get manager prompt answers

// //get engineer prompt answers

// //get intern prompt answers

// //write to html


// //while loop
// // while