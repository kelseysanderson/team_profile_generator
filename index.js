const fs = require('fs');
const inquirer = require('inquirer');
const Engineer  = require("./lib/engineer");
const Employee  = require("./lib/employee");
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const team = []

function addTeamMember(){
    inquirer.prompt([
        {
        type: 'list',
        name: 'role',
        message: 'What is the team member\'s role?',
        choices: ["Manager", "Engineer", "Intern"],
        },
        {
        type: 'input',
        name: 'name',
        message: 'What is the team member\'s name?',
        },
        {
        type: 'input',
        message: 'What is the team member\'s employee id?',
        name: 'id',
        },
        {
        type: 'input',
        message: 'What is the team member\'s email?',
        name: 'email',
        }])

    .then(function(data){
        if (data.role === "Manager"){
            manager = new Manager( data.name, data.id, data.email)
                inquirer.prompt([
                {
                type: 'input',
                name: 'office',
                message: 'What is the team member\'s office number?',
                }])
                    .then(function(data){
                        manager.officeNumber = data.office
                        team.push(manager)
                        anotherMember()})
       } else if (data.role === "Engineer"){
            engineer = new Engineer( data.name, data.id, data.email)
                inquirer.prompt([

                {
                type: 'input',
                name: 'github',
                message: 'What is the team member\'s github?',
                }])
                
                .then(function(data){
                    engineer.github = data.github
                    team.push(engineer)
                    anotherMember()})
        } else {
            intern = new Intern( data.name, data.id, data.email)
                inquirer.prompt([
                {
                type: 'input',
                name: 'school',
                message: 'What school does the team member attend?',
                }])
                .then(function(data){
                    intern.school = data.school
                    team.push(intern)
                    anotherMember()})
        }
    });
}

function anotherMember(){
    inquirer.prompt([
    {
    type: 'list',
    name: 'anotherMember',
    message: 'Would you like to add another team member?',
    choices: ["Yes", "No"],
    },
    ])
    .then(function(data){
        if (data.anotherMember === "Yes"){
            addTeamMember();
        } else{
            getTeamHtml(team);
        }
    });
}

function getTeamHtml(team){
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mandali">


        <title>Team Profile Generator</title>
    </head>
    <body style = "background-color: #f4f3ea">
        <header>
            <div class="jumbotron jumbotron-fluid"  style = "border-bottom: 2px solid #1d2638; background: linear-gradient(to bottom, #4f5a70 0%, #333d51 100%); color:#f9f1f8; font-family: 'Mandali';">
                <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>    
        </header>
        <main class = "container" >
            <section class="row justify-content-center">
                <div class="col-12 col-md-9 mb-3">
                <h2 style = "text-align: center; padding-bottom: 20px;">Meet Everyone:</h2>
        
            <section class="row justify-content-center">
                `

    team.forEach((member,index) => {
        if (member.officeNumber){
            html +=`
            <div id = "employee-card" class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card" style = "box-shadow:10px 10px 2px 1px rgba(41, 75, 168, 0.2); border-radius: 5px;">
                    <div class = card-title class="card-title" style="padding: 10px 0px 10px 10px; border-bottom: 2px solid #8a6f17; background-color:#c29d23; color: #f7f5f2">
                        <h3>${member.name}</h3>
                        <h4>Engineer</h4>
                    </div>
                    <div class="card-body">
                    <ul class="card-text">
                        <li>${member.id}</li>
                        <li>${member.email}</li>
                        <li>${member.officeNumber}</li>
                    </ul>
                    </div>
                </div>
            </div> `
        } else if (member.github){
            html += `
            <div id = "employee-card" class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card" style = "box-shadow:10px 10px 2px 1px rgba(41, 75, 168, 0.2); border-radius: 5px;">
                    <div class = card-title class="card-title" style="padding: 10px 0px 10px 10px; border-bottom: 2px solid #8a6f17; background-color:#c29d23; color: #f7f5f2">
                        <h3>${member.name}</h3>
                        <h4>Engineer</h4>
                    </div>
                    <div class="card-body">
                    <ul class="card-text">
                        <li>${member.id}</li>
                        <li>${member.email}</li>
                        <li>${member.officeNumber}</li>
                    </ul>
                    </div>
                </div>
            </div> `
        } else{
            html +=`
            <div id = "employee-card" class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card" style = "box-shadow:10px 10px 2px 1px rgba(41, 75, 168, 0.2); border-radius: 5px;">
                    <div class = card-title class="card-title" style="padding: 10px 0px 10px 10px; border-bottom: 2px solid #8a6f17; background-color:#c29d23; color: #f7f5f2">
                        <h3>${member.name}</h3>
                        <h4>Engineer</h4>
                    </div>
                    <div class="card-body">
                    <ul class="card-text">
                        <li>${member.id}</li>
                        <li>${member.email}</li>
                        <li>${member.officeNumber}</li>
                    </ul>
                    </div>
                </div>
            </div> `
        }
    });
    html+=`  
    </section>
            </main>
        </body>
    </html>`
    fs.writeFile('./dist/index.html', html, (err) =>
    err ? console.error(err) : console.log("Success!")
);
}
addTeamMember();

    


