const Employee = require('./Employee');

class Intern extends Employee {
    constructor(eName, id, email, school) {
        super(eName, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}
module.exports = Intern;