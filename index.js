const fs = require('fs');
const inquirer = require('inquirer');
const Engineer  = require("./lib/engineer");
const Employee  = require("./lib/employee");
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

let team = []

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
        //switch statement
        //pass in "office number, github, school"...

        
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
    console.log(team[0].getRole())
    //one html card, pass through 
    let html = []
    let htmlstart = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mandali">
        <link rel="stylesheet" href="./style.css">


        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>    
        </header>
        <main class = "container " >
            <section class="row justify-content-center">
                <div class="col-12 col-md-9 mb-3">
                <h2>Meet Everyone:</h2>
        
            <section class="row justify-content-center">`

            html.push(htmlstart)
    
    team.forEach((member,index) => {
               
            let card =`
                <div id = "employee-card" class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <div class="card">
                        <div class="card-title">
                            <h3>${member.name}</h3>
                            <h4>${team[index].getRole()}</h4>
                        </div>
                        <div class="card-body">
                        <ul class="card-text">
                            <li><span>#️⃣ Employee Id: </span>${member.id}</li>
                            <li><span>📧 Email: </span><a href="mailto:${member.email}">${member.email}</a></li>`

            if (member.officeNumber){
                card +=        `
                            <li><span>📍 Office Number:</span> ${team[index].getOfficeNumber()}</li>
                        </ul>
                        </div>
                    </div>
                </div>`
                html.push(card)
            }
            else if (member.github){
                card +=        `
                            <li><span>💻 Github:</span><a href = "https://www.github.com/${team[index].getGithub()}"> ${team[index].getGithub()}</a></li>
                        </ul>
                        </div>
                    </div>
                </div> `
                html.push(card)

            }else if (member.school){
                card +=        `
                            <li><span>🎓 School:</span> ${team[index].getSchool()}</li>
                        </ul>
                        </div>
                    </div>
                </div> `
                html.push(card)

            }       
        }); 

        
        let footer =`  
                    </section>
        </main>
    </body>
</html>`
        html.push(footer);

        html = html.toString();
        html = html.replace(/,/g,"");

        
        fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.error(err) : console.log("Success, your html has been generated and is in the dist folder!")
        );
}
    
addTeamMember();

    


