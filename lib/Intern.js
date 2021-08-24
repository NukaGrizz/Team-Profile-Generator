const Employee = require('./Employee');
// Intern.js class constructor and methods
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;