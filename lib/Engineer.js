const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
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