const Employee = require('./Employee');

class Manager extends Employee {
    constructor(eName, id, email, officeNumber) {
        super(eName, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;