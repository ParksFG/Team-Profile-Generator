// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// Information for team
const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: `What is this employee's name?`,
    },
]