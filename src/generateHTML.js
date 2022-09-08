// Array for cards
const cards = []
// Decides icon and title to use
function headerGen(employeeRole) {
    if(employeeRole === 'Manager') {
        return '<i class="fa-solid fa-user-tie"></i><p>Manager</p>'
    }else if (employeeRole === 'Engineer') {
        return '<i class="fa-solid fa-laptop-code"></i><p>Engineer</p>'
    }else if (employeeRole === 'Intern') {
        return '<i class="fa-solid fa-graduation-cap"></i><p>Intern</p>'
    }else {
        return ``
    }
} 
// Generate third list item
function thirdItemGen(employee) {
    const thirdItem = employee.getRole();
    if(thirdItem === 'Manager') {
        return `<li>Office Number: ${employee.officeNumber}</li>`
    }else if (thirdItem === 'Engineer') {
        return `<li>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>`
    }else {
        return `<li>School: ${employee.school}</li>`
    }
}
// Generates cards
function cardGen(employees) {
    for(let i = 0; i < employees.length; i++) {
        const currentRole = employees[i].getRole()
        cards.push(`<div class="teamCard">
        <header>
            <h3>${employees[i].eName}</h3>
            ` + headerGen(currentRole) +
            `

        </header>
        <div>
            <ul>
                <li>ID: ${employees[i].id}</li>
                <li>Email: <a href="mailto: ${employees[i].email}">${employees[i].email}</a></li>
                ` + thirdItemGen(employees[i]) + `
                
            </ul>
        </div>
    </div>`)
    }
}
// Generating the html funciton
const generateHTML = function(employees) {
    const employeeData = employees;
    cardGen(employeeData);
    const finalCards = cards.join('');
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
    <script src="https://kit.fontawesome.com/8a3a45d04a.js" crossorigin="anonymous"></script>
</head>
<body>
    <header id="mainHeader">
        <h1>My Team</h1>
    </header>
    <div id="cardContainer">
    ` + finalCards
}

module.exports = {
    generateHTML,
    cardGen,
    thirdItemGen,
    headerGen,
};
