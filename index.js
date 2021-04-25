const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



const employee = [];
var userRole = 'Office Number'

function addMember () {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: 'Please enter your name'
            },

            {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee number',
            },
        
            {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            },
       
            {
            type: 'input',
            name: 'roleDifference',
            message: `Please enter your ${userRole}`,
            },

            {
            type: 'list',
            message: 'Would you like add a new team member or build your team',
            name: 'addOrBuild',
            choices: [
                'Add: Engineer',
                'Add: Intern',
                'Build my team']
            }
            ])
       
        .then(({name, id, email, roleDifference, addOrBuild}) =>{
            let newTeamMember = [];

            if (userRole === 'Office Number'){
                newTeamMember = new Manager (name, id, email, roleDifference)
                employee.push(newTeamMember)
                addHTML(newTeamMember);
            } else if (userRole === 'Github Address'){
                newTeamMember = new Engineer (name, id, email, roleDifference)
                employee.push(newTeamMember)
                addHTML(newTeamMember)
            } else {
                newTeamMember = new Intern (name, id, email, roleDifference)
                employee.push(newTeamMember)
                addHTML(newTeamMember)
            }

            if (addOrBuild === 'Build my team'){
                console.log(employee)
               finishHTML();
            } else if (addOrBuild === 'Add: Engineer') {
                userRole = 'Github Address'
                addMember();
            } else {
                userRole = 'school'
                addMember()
            }
        })
        
}

function startHTML (){
    const starterHTML =
    `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`
    
    fs.writeFile("./dist/index.html", starterHTML, function(err){
        if (err){
            console.log(err)
        }
    })
    
}

function addHTML(teamMember) {
    return new Promise(function() {
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        let data = ''

        if (role === "Manager") {
            const officePhone = teamMember.getOffice();
            data = `
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                        <h4 class="card-header font-weight-bold bg-primary">${name}<br><br> <span class="font-weight-light font-italic">Manager</span></h4>
                        <ul class="list-group list-group-flush rounded-circle">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Office Phone: <br>${officePhone}</li>
                        </ul>
                    </div>
                </div>
            `
        } else if (role === "Intern") {
            const school = teamMember.getSchool();
            data = `
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                        <h4 class="card-header font-weight-bold bg-secondary">${name}<br><br> <span class="font-weight-light font-italic">Intern</span></h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email Address: <br><a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: UCF</li>
                        </ul>
                    </div>
                </div>
            `
        } else {
            const gitHub = teamMember.getGithub();
            data = 
            `
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                        <h4 class="card-header font-weight-bold bg-secondary">${name}<br><br> <span class="font-weight-light font-italic">Engineer</span></h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email Address: <br><a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" target="blank">${gitHub}</a></li>
                        </ul>
                    </div>
                </div>
            `
        }

        console.log("team member added");
        fs.appendFile("./dist/index.html", data, function(err){
            if (err){
                console.log(err)
            }
        })
    });
}

function finishHTML (){
    const finishHTML = `
    </div>
    </div>  
</body>
</html>
    `

    fs.appendFile("./dist/index.html", finishHTML, function(err){
        if (err){
            console.log(err)
        }
    })
}

startHTML();
addMember();