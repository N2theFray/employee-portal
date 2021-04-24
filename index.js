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



function addHTML(){
}

function finishHTML (){
}

addMember();