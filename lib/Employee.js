class Employee {
    constructor(eName, id, email) {
        this.eName = eName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.eName
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;