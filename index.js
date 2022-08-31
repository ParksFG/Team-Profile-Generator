// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = []
const generateHTML = require('./src/generateHTML')

// Information for team
const questionsManager = [
    {
        type: 'input',
        name: 'employeeName',
        message: `Enter the manager's name.`,
    },
    {
        type: 'number',
        name: 'employeeId',
        message: `Enter the employee's Id Number.`,
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: `Enter the employee's Email.`,
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: `Enter the manager's office number.`
    },
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Would you like to add another employee or ready to generate?',
        choices: ['Engineer', 'Intern', `I'm finished`],
    },
];

const questionsEngineer = [
    {
        type: 'input',
        name: 'employeeName',
        message: `Enter the engineer's name.`,
    },
    {
        type: 'number',
        name: 'employeeId',
        message: `Enter the employee's Id Number.`,
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: `Enter the employee's Email.`,
    },
    {
        type: 'input',
        name: 'github',
        message: `Enter the engineer's github profile name.`,
    },
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Would you like to add another employee or ready to generate?',
        choices: ['Engineer', 'Intern', `I'm finished`],
    },
];

const questionsIntern = [
    {
        type: 'input',
        name: 'employeeName',
        message: `Enter the interns's name.`,
    },
    {
        type: 'number',
        name: 'employeeId',
        message: `Enter the employee's Id Number.`,
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: `Enter the employee's Email.`,
    },
    {
        type: 'input',
        name: 'schoolName',
        message: `Enter the intern's school name.`,
    },
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Would you like to add another employee or ready to generate?',
        choices: ['Engineer', 'Intern', `I'm finished`],
    },
];

// Function for engineer questions
function engineerQ() {
    inquirer
        .prompt(questionsEngineer)
        .then((answers) => {
            const employee = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
            employees.push(employee)
            if(answers.nextEmployee === "Engineer") {
                engineerQ();
            }else if(answers.nextEmployee === "Intern") {
                internQ();
            }else {
                // generateHTML(employees);
                const fileName = 'index.html';
                const data = generateHTML.generateHTML(employees);
                writeToFile(fileName, data);
                // console.log(employees);
            }
        });
}
// Function for intern questions
function internQ() {
    inquirer
        .prompt(questionsIntern)
        .then((answers) => {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.schoolName);
            employees.push(employee)
            if(answers.nextEmployee === "Engineer") {
                engineerQ();
            }else if(answers.nextEmployee === "Intern") {
                internQ();
            }else {
                // generateHTML(employees);
                const fileName = 'index.html';
                const data = generateHTML.generateHTML(employees);
                writeToFile(fileName, data);
                // console.log(employees);
        }
    });
}
// Function for generating the HTML
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}



// Function for starting
function init() {
    inquirer
        .prompt(questionsManager)
        .then((answers) => {
            const employee = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.officeNumber);
            employees.push(employee)
            if(answers.nextEmployee === "Engineer") {
                engineerQ();
            }else if(answers.nextEmployee === "Intern") {
                internQ();
            }else {
                // generateHTML(employees);
                const fileName = 'index.html';
                const data = generateHTML.generateHTML(employees);
                writeToFile(fileName, data);
                // console.log(employees);
            }
        });
}
// Starts the app
init()
