const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(eName, id, email, github) {
        super(eName, id, email)
        this.github = github;
    }

    getGithub() {
        const githubProf = "https://github.com/" + this.github
        return githubProf
    }

    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;